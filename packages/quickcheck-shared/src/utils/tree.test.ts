import { describe, expect, test } from "vitest";

import { TreeNode } from "./tree";

interface TestData {
  id: number;
  parentId?: number;
  name: string;
}

describe("TreeNode", () => {
  test("can be constructed with a data object", () => {
    const data: TestData = { id: 1, name: "Node 1" };
    const node = new TreeNode<TestData>(data);
    expect(node.dataObj).toEqual(data);
  });

  test("can add a child node", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const childData: TestData = { id: 2, parentId: 1, name: "Child Node" };
    const parentNode = new TreeNode<TestData>(parentData);
    const childNode = new TreeNode<TestData>(childData);
    parentNode.addChild(childNode);
    expect(parentNode.children).toContain(childNode);
    expect(childNode.parent).toEqual(parentNode);
  });

  test("can remove a child node", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const childData: TestData = { id: 2, parentId: 1, name: "Child Node" };
    const parentNode = new TreeNode<TestData>(parentData);
    const childNode = new TreeNode<TestData>(childData);
    parentNode.addChild(childNode);
    childNode.removeParent();
    expect(parentNode.children).not.toContain(childNode);
    expect(childNode.parent).toBeNull();
  });

  test("can add a parent node", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const childData: TestData = { id: 2, name: "Child Node" };
    const parentNode = new TreeNode<TestData>(parentData);
    const childNode = new TreeNode<TestData>(childData);
    childNode.addParent(parentNode);
    expect(parentNode.children).toContain(childNode);
    expect(childNode.parent).toEqual(parentNode);
  });

  test("can remove a parent node", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const childData: TestData = { id: 2, name: "Child Node" };
    const parentNode = new TreeNode<TestData>(parentData);
    const childNode = new TreeNode<TestData>(childData);
    childNode.addParent(parentNode);
    childNode.removeParent();
    expect(parentNode.children).not.toContain(childNode);
    expect(childNode.parent).toBeNull();
  });

  test("can get all descendants", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const child1Data: TestData = { id: 2, parentId: 1, name: "Child 1" };
    const child2Data: TestData = { id: 3, parentId: 1, name: "Child 2" };
    const grandchildData: TestData = { id: 4, parentId: 2, name: "Grandchild" };
    const parentNode = new TreeNode<TestData>(parentData);
    const child1Node = new TreeNode<TestData>(child1Data);
    const child2Node = new TreeNode<TestData>(child2Data);
    const grandchildNode = new TreeNode<TestData>(grandchildData);
    parentNode.addChild(child1Node);
    parentNode.addChild(child2Node);
    child1Node.addChild(grandchildNode);
    const descendants = parentNode.getDescendants();
    expect(descendants).toContain(child1Node);
    expect(descendants).toContain(child2Node);
    expect(descendants).toContain(grandchildNode);
  });

  test("can get all ancestors", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const childData: TestData = { id: 2, parentId: 1, name: "Child Node" };
    const grandchildData: TestData = { id: 3, parentId: 2, name: "Grandchild" };
    const parentNode = new TreeNode<TestData>(parentData);
    const childNode = new TreeNode<TestData>(childData);
    const grandchildNode = new TreeNode<TestData>(grandchildData);
    parentNode.addChild(childNode);
    childNode.addChild(grandchildNode);
    const ancestors = grandchildNode.getAncestors();
    expect(ancestors).toContain(childNode);
    expect(ancestors).toContain(parentNode);
  });

  test("can check if a node is a descendant of another node", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const childData: TestData = { id: 2, parentId: 1, name: "Child Node" };
    const grandchildData: TestData = { id: 3, parentId: 2, name: "Grandchild" };
    const parentNode = new TreeNode<TestData>(parentData);
    const childNode = new TreeNode<TestData>(childData);
    const grandchildNode = new TreeNode<TestData>(grandchildData);
    parentNode.addChild(childNode);
    childNode.addChild(grandchildNode);
    expect(grandchildNode.isDescendantOf(parentNode)).toBe(true);
    expect(childNode.isDescendantOf(parentNode)).toBe(true);
    expect(grandchildNode.isDescendantOf(childNode)).toBe(true);
    expect(parentNode.isDescendantOf(grandchildNode)).toBe(false);
  });

  test("can check if a node is an ancestor of another node", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const childData: TestData = { id: 2, parentId: 1, name: "Child Node" };
    const grandchildData: TestData = { id: 3, parentId: 2, name: "Grandchild" };
    const parentNode = new TreeNode<TestData>(parentData);
    const childNode = new TreeNode<TestData>(childData);
    const grandchildNode = new TreeNode<TestData>(grandchildData);
    parentNode.addChild(childNode);
    childNode.addChild(grandchildNode);
    expect(parentNode.isAncestorOf(childNode)).toBe(true);
    expect(parentNode.isAncestorOf(grandchildNode)).toBe(true);
    expect(childNode.isAncestorOf(grandchildNode)).toBe(true);
    expect(grandchildNode.isAncestorOf(parentNode)).toBe(false);
  });

  test("can check if a node is a leaf node", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const childData: TestData = { id: 2, parentId: 1, name: "Child Node" };
    const leafNodeData: TestData = { id: 3, parentId: 2, name: "Leaf Node" };
    const parentNode = new TreeNode<TestData>(parentData);
    const childNode = new TreeNode<TestData>(childData);
    const leafNode = new TreeNode<TestData>(leafNodeData);
    parentNode.addChild(childNode);
    childNode.addChild(leafNode);
    expect(parentNode.isLeaf()).toBe(false);
    expect(childNode.isLeaf()).toBe(false);
    expect(leafNode.isLeaf()).toBe(true);
  });

  test("can remove all descendants", () => {
    const parentData: TestData = { id: 1, name: "Parent Node" };
    const child1Data: TestData = { id: 2, parentId: 1, name: "Child 1" };
    const child2Data: TestData = { id: 3, parentId: 1, name: "Child 2" };
    const grandchildData: TestData = { id: 4, parentId: 2, name: "Grandchild" };
    const parentNode = new TreeNode<TestData>(parentData);
    const child1Node = new TreeNode<TestData>(child1Data);
    const child2Node = new TreeNode<TestData>(child2Data);
    const grandchildNode = new TreeNode<TestData>(grandchildData);
    parentNode.addChild(child1Node);
    parentNode.addChild(child2Node);
    child1Node.addChild(grandchildNode);
    parentNode.removeAllDescendants();
    expect(parentNode.children).toEqual([]);
    expect(child1Node.parent).toBeNull();
    expect(child2Node.parent).toBeNull();
  });
});
