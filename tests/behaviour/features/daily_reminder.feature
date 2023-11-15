Feature: Daily Reminder to Question Flow
As a user
when I get a daily Reminder
and click on the link
The application will authenticate me
and take me into the question flow

  Scenario: Clicks on the link in the daily reminder
    Given quickcheck has sent me a notification with a token
    When the user visits the notification url
    Then the user should see a question in the UI
    When I choose one of the choices
    Then the "check answer" button appears
    When I click the "check answer" button
    Then the choice feedback displays

