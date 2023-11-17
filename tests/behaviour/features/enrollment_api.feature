Feature: Enrollment API enrolls a user and allows them to authenticate
  As an external system, I can send an enrollment payload to the enrollment API
  and the user will be created in the system
  then I can query the user token API to get a token for the user
  and then visiting that link
  I will authenticate as that user
  and land on the question flow
  and be able to navigate to the dashboard

  Scenario: Enrollment API is called with a valid payload
    Given A Valid user and enrollment
    When The payload is sent to the enrollment API
    Then the API should respond with a "201" code

  Scenario: Enrollment API is called with an invalid payload
    Given An incomplete user and enrollment
    When The payload is sent to the enrollment API
    Then the API should respond with a "500" code

  Scenario: Enrolled user is able to login to Quickcheck
    Given A valid user ID
    When The user token API is sent the valid user ID
    Then The user token API should respond with a "200" code and a link to login

  Scenario: A valid login link is used to login to Quickcheck
    Given A valid login link
    When The login link is visited
    Then the user should land on the question flow
    And be able to navigate to the dashboard
