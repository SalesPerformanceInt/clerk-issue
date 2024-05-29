export type Id = string | number

export interface DataObj {
  id: Id
  parentId?: Id | null
}

export class TreeNode<T extends DataObj> {
  parent?: TreeNode<T> | null
  children: TreeNode<T>[] = []
  id: Id
  parentId?: Id | null
  dataObj: T
  collectionnames = []

  constructor(dataObj: T) {
    this.id = dataObj.id
    this.parentId = dataObj.parentId
    this.dataObj = dataObj
  }

  removeChild(childNode: TreeNode<T>) {
    childNode.removeParent()
  }

  addChild(childNode: TreeNode<T>) {
    this.children.push(childNode)

    if (childNode.parent !== this) {
      childNode.parent = this
    }
  }

  addParent(parentNode: TreeNode<T>) {
    this.parent = parentNode

    if (this.parent.children.indexOf(this) === -1) {
      this.parent.addChild(this)
    }
  }

  removeParent() {
    if (!this.parent) return

    const thisChildIndex = this.parent.children.indexOf(this)

    if (thisChildIndex > -1) {
      this.parent.children.splice(thisChildIndex, 1)
    } else {
      throw "Node has no parent"
    }

    this.parent = null
  }

  getDescendants() {
    let result: TreeNode<T>[] = []

    for (let i = 0; i < this.children.length; i++) {
      const descendant = this.children[i]
      if (descendant) {
        result.push(descendant)
        result = result.concat(descendant.getDescendants())
      }
    }

    return result
  }

  getAncestors() {
    let result: TreeNode<T>[] = []

    if (this.parent) {
      result.push(this.parent)
      result = result.concat(this.parent.getAncestors())
    }

    return result
  }

  isDescendantOf(node: TreeNode<T>) {
    for (let i = 0; i < node.children.length; i++) {
      const descendant = node.children[i]

      if (descendant === this) return true
      if (descendant && this.isDescendantOf(descendant)) return true
    }

    return false
  }

  isAncestorOf(node: TreeNode<T>) {
    for (let i = 0; i < this.children.length; i++) {
      const descendant = this.children[i]

      if (descendant === node) return true
      if (descendant && descendant.isAncestorOf(node)) return true
    }

    return false
  }

  isLeaf() {
    return this.children.length === 0
  }

  removeAllDescendants() {
    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i]
      if (childNode) childNode.parent = null
    }

    this.children = []
  }
}

export type NodeById<T extends DataObj> = Record<Id, TreeNode<T>>

export class Tree<T extends DataObj> {
  private nodeById: NodeById<T> = {}
  rootNode: TreeNode<T>
  createDetachedNode: CreateDetachedNode<T>

  constructor(rootNode: TreeNode<T>, nodeById: NodeById<T>, createDetachedNode: CreateDetachedNode<T>) {
    this.nodeById = nodeById
    this.rootNode = rootNode
    this.createDetachedNode = createDetachedNode
  }

  getNodeById(id: Id) {
    return this.nodeById[id]
  }

  createNode(dataObj: T) {
    const result = this.createDetachedNode(dataObj)

    this.nodeById[result.id] = result

    return result
  }
}

export type CreateDetachedNode<T extends DataObj> = (this: Tree<T> | void, dataObj: T) => TreeNode<T>

const createDetachedNode = function <T extends DataObj>(this: Tree<T> | void, dataObj: T) {
  const node = new TreeNode(dataObj)

  if (this?.getNodeById && node.parentId) {
    const parentNode = this.getNodeById(node.parentId)

    if (!parentNode) throw "Could not find parent node. Does not belong to tree"

    parentNode.addChild(node)
  }

  return node
}

// Builds trees based on an object array object and a config object which defines the parent child id relationship
export const buildTrees = function <T extends DataObj>(objectArray: T[]) {
  if (!objectArray) throw "objectArray is mandatory"

  const trees = []
  const rootNodes = []
  const nodeById: Record<Id, TreeNode<T>> = {}

  for (let i = 0; i < objectArray.length; i++) {
    const obj = objectArray[i]
    if (obj) {
      const node = createDetachedNode(obj)
      nodeById[obj.id] = node

      if (!obj?.parentId) {
        rootNodes.push(node)
      }
    }
  }

  for (let i = 0; i < objectArray.length; i++) {
    const obj = objectArray[i]

    if (obj) {
      const node = nodeById[obj.id]
      const parentId = node?.dataObj.parentId

      if (parentId) {
        const parentNode = nodeById[parentId]
        if (parentNode) {
          node.addParent(parentNode)
        }
      } else if (node) {
        node.parent = null
      }
    }
  }

  for (let i = 0; i < rootNodes.length; i++) {
    const rootNode = rootNodes[i]

    if (rootNode) {
      const tree = new Tree(rootNode, nodeById, createDetachedNode)
      trees.push(tree)
    }
  }

  return trees
}

export const getNodeInTreesById = <T extends DataObj>(trees: Tree<T>[], id: Id) => {
  const tree = trees.find((tree) => tree.getNodeById(id))
  return tree?.getNodeById(id)
}
