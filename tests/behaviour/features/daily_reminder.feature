Feature: Daily Reminder to Question Flow
As a user
when I get a daily Reminder
and click on the link
The application will authenticate me
and take me into the question flow

  Scenario: Clicks on the link in the daily reminder
    Given quickcheck has sent me a notification with a token
    When the user visits the notification url
    Then the user should be taken into the question flow as an authenticated user