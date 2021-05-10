@Sanity @Smoke @Regression
Feature: User Management
  As a system administrator
  In order to test the User Management functionality
  I want to create valid and invalid users and delete and edit user definitions

  Background:
    Given I log in to the application
    And I navigate to the Users page

  Scenario Outline: Create users - basic fields <login>
    When I create a user with the following options:
      | login                      | <login>                      |
      | passwd                     | <passwd>                     |
      | passwdConfirm              | <passwdConfirm>              |
      | expDate                    | <expDate>                    |
      | startupNamespace           | <startupNamespace>           |
      | startupTagRoutine          | <startupTagRoutine>          |
      | mobilePhoneServiceProvider | <mobilePhoneServiceProvider> |
      | mobilePhoneNumber          | <mobilePhoneNumber>          |
    Then the Edit User page validation elements are confirmed
      | responseText         | <responseText>         |
      | nameHintRed          | <nameHintRed>          |
      | passwdHintRed        | <passwdHintRed>        |
      | passwdConfirmHintRed | <passwdConfirmHintRed> |
      | routineHint          | <routineHint>          |
      | namespaceHint        | <namespaceHint>        |
    And I confirm the user is listed on the Users page <exists>
    And I validate the following subset of columns in the user row <exists>
      | Name    | Namespace          | Enabled | Type          |
      | <login> | <startupNamespace> | Yes     | Password user |
##    Then I confirm via Node API that the user exists in the database <exists>
    Then I confirm via Node API that the user exists in the database <exists>
    Examples:
      | login                        | passwd                            | passwdConfirm                     | expDate    | startupNamespace | startupTagRoutine | exists | responseText                                                         | nameHintRed | passwdHintRed | passwdConfirmHintRed | namespaceHint                         | routineHint                                            | mobilePhoneNumber | mobilePhoneServiceProvider |
      | newUser1                     | newUser1                          | newUser1                          |            |                  |                   | true   | User saved.                                                          | false       | false         | false                |                                       |                                                        | 111-111-1111      | Verizon                    |
      |                              | missingNameUser                   | missingNameUser                   |            |                  |                   | false  | There was a problem with the form. See the highlighted fields below. | true        | false         | false                |                                       |                                                        | 222-222-2222      | Nextel                     |
      | missingPasswdUser            |                                   | missingPasswdUser                 |            |                  |                   | false  | There was a problem with the form. See the highlighted fields below. | false       | true          | true                 |                                       |                                                        | 111-111-1111      | T-Mobile                   |
      | nonMatchingConfirmPasswdUser | passwd                            | nonMatchingPasswd                 |            |                  |                   | false  | There was a problem with the form. See the highlighted fields below. | false       | false         | true                 |                                       |                                                        | 111-111-1111      | AT&T Wireless              |
      | missingConfirmPasswdUser     | passwd                            |                                   |            |                  |                   | false  | There was a problem with the form. See the highlighted fields below. | false       | false         | true                 |                                       |                                                        | 111-111-1111      | Alltel                     |
      | validDateLeapYear            | passwd                            | passwd                            | 2020-02-29 |                  |                   | true   | User saved.                                                          | false       | false         | false                |                                       |                                                        | 111-111-1111      | Sprint PCS                 |
      | invalidCharDate              | passwd                            | passwd                            | abc        |                  |                   | false  | ERROR #944: Invalid expiration date                                  | false       | false         | false                |                                       |                                                        | 111-111-1111      | Cellular One               |
      | invalidValueDate1            | passwd                            | passwd                            | 2017-02-29 |                  |                   | false  | ERROR #944: Invalid expiration date                                  | false       | false         | false                |                                       |                                                        | 111-111-1111      | Verizon                    |
      | invalidValueDate2            | passwd                            | passwd                            | 2017-13-29 |                  |                   | false  | ERROR #944: Invalid expiration date                                  | false       | false         | false                |                                       |                                                        | 111-111-1111      | Nextel                     |
      | invalidFormatDate            | passwd                            | passwd                            | 1/1/2025   |                  |                   | false  | ERROR #944: Invalid expiration date                                  | false       | false         | false                |                                       |                                                        | 111-111-1111      | T-Mobile                   |
      | passwdOverMaxConfigLength    | 123456789012345678901234567890123 | 123456789012345678901234567890123 |            |                  |                   | false  | ERROR #845: Password does not match length or pattern requirements   | false       | false         | false                |                                       |                                                        | 111-111-1111      | AT&T Wireless              |
      | passwdUnderMinConfigLength   | 12                                | 12                                |            |                  |                   | false  | ERROR #845: Password does not match length or pattern requirements   | false       | false         | false                |                                       |                                                        | 111-111-1111      | Alltel                     |
      | routineNotInNamespace        | passwd                            | passwd                            |            | %SYS             | ^NoRoutine        | false  | There was a problem with the form. See the highlighted fields below. | false       | false         | false                |                                       | Routine 'NoRoutine' does not exist in namespace '%SYS' | 111-111-1111      | Sprint PCS                 |
      | routineWithNoNamespace       | passwd                            | passwd                            |            |                  | ^NoNamespace      | false  | There was a problem with the form. See the highlighted fields below. | false       | false         | false                | Required if startup routine specified |                                                        | 111-111-1111      | Cellular One               |

  Scenario Outline: Create users - all fields <login>
    When I create a user with the following options:
      | login                      | <login>                      |
      | passwd                     | <passwd>                     |
      | passwdConfirm              | <passwdConfirm>              |
      | fullName                   | <fullName>                   |
      | comment                    | <comment>                    |
      | chgPasswdNextLogin         | <chgPasswdNextLogin>         |
      | passwdNeverExpires         | <passwdNeverExpires>         |
      | userEnabled                | <userEnabled>                |
      | expDate                    | <expDate>                    |
      | acctNeverExpires           | <acctNeverExpires>           |
      | startupNamespace           | <startupNamespace>           |
      | startupTagRoutine          | <startupTagRoutine>          |
      | emailAddress               | <emailAddress>               |
      | mobilePhoneServiceProvider | <mobilePhoneServiceProvider> |
      | mobilePhoneNumber          | <mobilePhoneNumber>          |
    Then the Edit User page validation elements are confirmed
      | responseText         | <responseText>         |
      | nameHintRed          | <nameHintRed>          |
      | passwdHintRed        | <passwdHintRed>        |
      | passwdConfirmHintRed | <passwdConfirmHintRed> |
    Then I confirm the user is listed on the Users page <exists>
    Then I confirm via Node API that the user exists in the database <exists>
    And I validate the following subset of columns in the user row <exists>
      | Name    | Full Name  | Namespace          | Enabled | Type          |
      | <login> | <fullName> | <startupNamespace> | Yes     | Password user |
    #Commenting out startupTagRoutine until code is in place to add one
    Examples:
      | login         | passwd | passwdConfirm | fullName   | comment | chgPasswdNextLogin | passwdNeverExpires | userEnabled | expDate    | acctNeverExpires | startupNamespace | startupTagRoutine | emailAddress      | mobilePhoneServiceProvider | mobilePhoneNumber | responseText | exists | nameHintRed | passwdHintRed | passwdConfirmHintRed |
      | allFieldsUser | passwd | passwd        | All Fields | comment | true               | false              | true        | 2025-01-01 | false            | %SYS             |                   | newUser@gmail.com | Verizon                    | 111-111-1111      | User saved.  | true   | false       | false         | false                |

  Scenario: Create a user with all fields at Maximum length
    When I create a user with the following options:
      | login                      | allMaxLengthFieldsUser3456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123412345678901234567890123456789012                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
      | passwd                     | 12345678901234567890123456789012                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | passwdConfirm              | 12345678901234567890123456789012                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | fullName                   | allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153 |
      | comment                    | allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153 |
      | emailAddress               | 12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234561234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | mobilePhoneNumber          | 1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567812345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | mobilePhoneServiceProvider | Verizon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    Then the user response should contain User saved.
    And I confirm the user is listed on the Users page true
    Then I confirm via Node API that the user exists in the database true


  Scenario: Create a user with all fields over Maximum length
    When I create a user with the following options:
      | login                      | allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901123456789012345678901234567890123                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
      | passwd                     | 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | passwdConfirm              | 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | fullName                   | allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1534 |
      | comment                    | allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser345678901allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_153661186554523456789012345678901234567890123456789012345678901234567890123456789012345678901_1536611865545allOverMaxLengthFieldsUser34567890123456789012345678901234567890123456789012345678901234567890123456789012345678901_153661186554512345678901234567890123456789012345678901234567890123456789012345678901_1534 |
      | emailAddress               | 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345612345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | mobilePhoneNumber          | 12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | mobilePhoneServiceProvider | Verizon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    Then I confirm the user is listed on the Users page false
    Then I confirm via Node API that the user exists in the database false
    And the user response should contain length longer than MAXLEN allowed of 160 > ERROR #5802: Datatype validation failed on property 'Security.Users:Name'
    And the user response should contain length longer than MAXLEN allowed of 128 > ERROR #5802: Datatype validation failed on property 'Security.Users:PasswordExternal', with value equal to "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789"
    And the user response should contain length longer than MAXLEN allowed of 2048 > ERROR #5802: Datatype validation failed on property 'Security.Users:FullName'
    And the user response should contain length longer than MAXLEN allowed of 2048 > ERROR #5802: Datatype validation failed on property 'Security.Users:Comment'
    And the user response should contain length longer than MAXLEN allowed of 512 > ERROR #5802: Datatype validation failed on property 'Security.Users:EmailAddress'
    And the user response should contain length longer than MAXLEN allowed of 256 > ERROR #5802: Datatype validation failed on property 'Security.Users:PhoneNumber'


  Scenario Outline: Edit user - all fields <login>
    When I create a user with the following options:
      | login                      | <login>                      |
      | passwd                     | <passwd>                     |
      | passwdConfirm              | <passwdConfirm>              |
      | fullName                   | <fullName>                   |
      | comment                    | <comment>                    |
      | chgPasswdNextLogin         | <chgPasswdNextLogin>         |
      | passwdNeverExpires         | <passwdNeverExpires>         |
      | userEnabled                | <userEnabled>                |
      | expDate                    | <expDate>                    |
      | acctNeverExpires           | <acctNeverExpires>           |
      | startupNamespace           | <startupNamespace>           |
      | startupTagRoutine          | <startupTagRoutine>          |
      | emailAddress               | <emailAddress>               |
      | mobilePhoneServiceProvider | <mobilePhoneServiceProvider> |
      | mobilePhoneNumber          | <mobilePhoneNumber>          |
    And I confirm the user is listed on the Users page <exists>
    And I validate the following subset of columns in the user row <exists>
      | Name    | Full Name  | Namespace          | Enabled | Type          |
      | <login> | <fullName> | <startupNamespace> | Yes     | Password user |
    Then I confirm via Node API that the user exists in the database <exists>
    When I edit the user with the following changes:
      | passwd                     | editedPasswd         |
      | passwdConfirm              | editedPasswd         |
      | fullName                   | Edited Full Name     |
      | comment                    | Edited Comment       |
      | chgPasswdNextLogin         | false                |
      | passwdNeverExpires         | true                 |
      | userEnabled                | false                |
      | expDate                    | 2026-01-01           |
      | startupNamespace           | USER                 |
      | startupTagRoutine          |                      |
      | emailAddress               | editedUser@gmail.com |
      | mobilePhoneServiceProvider | Nextel               |
      | mobilePhoneNumber          | 222-222-2222         |
    Then I confirm the user is listed on the Users page <exists>
    And I validate the following subset of columns in the user row <exists>
      | Name    | Full Name        | Namespace | Enabled | Type          |
      | <login> | Edited Full Name | USER      | No      | Password user |
    Then I confirm via Node API that the user exists in the database <exists>
    And the Edit User page validation elements are confirmed
      | responseText         | <responseText>         |
      | nameHintRed          | <nameHintRed>          |
      | passwdHintRed        | <passwdHintRed>        |
      | passwdConfirmHintRed | <passwdConfirmHintRed> |
    Examples:
      | login            | passwd | passwdConfirm | fullName     | comment | chgPasswdNextLogin | passwdNeverExpires | userEnabled | expDate    | acctNeverExpires | startupNamespace | startupTagRoutine | emailAddress      | mobilePhoneServiceProvider | mobilePhoneNumber | exists | responseText | nameHintRed | passwdHintRed | passwdConfirmHintRed | exists | nameHintRed | passwdHintRed |
      | editedFieldsUser | passwd | passwd        | Before edits | comment | true               | false              | true        | 2025-01-01 | false            | %SYS             |                   | newUser@gmail.com | Verizon                    | 111-111-1111      | true   | User saved.  | false       | false         | false                | true   |             |               |

  Scenario Outline: Delete user <login>
    When I create a user with the following options:
      | login              | <login>              |
      | passwd             | <passwd>             |
      | passwdConfirm      | <passwdConfirm>      |
      | fullName           | <fullName>           |
      | comment            | <comment>            |
      | chgPasswdNextLogin | <chgPasswdNextLogin> |
      | passwdNeverExpires | <passwdNeverExpires> |
      | userEnabled        | <userEnabled>        |
      | expDate            | <expDate>            |
      | acctNeverExpires   | <acctNeverExpires>   |
      | startupNamespace   | <startupNamespace>   |
      | startupTagRoutine  | <startupTagRoutine>  |
      | emailAddress       | <emailAddress>       |
    When I delete the user <confirm>
    Then I confirm the user is listed on the Users page <exists>
    And I validate the following subset of columns in the user row <exists>
      | Name    | Full Name  | Namespace          | Enabled | Type          |
      | <login> | <fullName> | <startupNamespace> | Yes     | Password user |
    And I confirm via Node API that the user exists in the database <exists>
    Examples:
      | login               | passwd | passwdConfirm | fullName      | comment | chgPasswdNextLogin | passwdNeverExpires | userEnabled | expDate    | acctNeverExpires | startupNamespace | startupTagRoutine | emailAddress      | confirm | exists |
      | deletedUser         | passwd | passwd        | Delete        | comment | true               | false              | true        | 2025-01-01 | false            | %SYS             |                   | newUser@gmail.com | confirm | false  |
      | deleteCancelledUser | passwd | passwd        | Cancel Delete | comment | true               | false              | true        | 2025-01-01 | false            | %SYS             |                   | newUser@gmail.com | V false | exists |

    ## User role tests
  Scenario Outline: Assign a role to a user via the UI <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
      | role          | <role>          |
      | grantOption   | <grantOption>   |
    Then I confirm via Node API that the user exists in the database true
    And I validate the following subset of columns for the role <role> on the User page roles tab
      | Role Name |
      | <role>    |
    And I confirm via SQL that the role has been assigned to the user true
#    And I confirm via Node API iteration that the role has been assigned to the user true
    Examples:
      | login               | passwd | passwdConfirm | role | grantOption |
      | userAccess%All      | passwd | passwd        | %All | false       |
      | userAccessRolesAll  | passwd | passwd        | All  |             |
      | userWithGrantOption | passwd | passwd        | %All | true        |

  Scenario: Create new role having %DB_%IRISSYS and %Development resources
    Given I navigate to the Roles page
    When I create a static role with the following options:
      | name | SQLRole |
    And I add the following resources to the role:
      | resource     | permissions |
      | %Development | U           |
      | %DB_IRISSYS  | RW          |
    And I confirm via Node API that the role exists in the database true
    And the role contains the specified resource and permissions in the database true
    And the role contains the specified set of resources and permissions in the database true

  Scenario: Create new role having SELECT privilege on table Config.Cluster
    Given I navigate to the Roles page
    When I create a static role with the following options:
      | name | Config.Cluster.SELECT_role |
    When I assign the SQL table privilege Cluster in schema Config to the role
#    When I execute the following SQL query
#      | query | GRANT SELECT on Config.Cluster to "Config.Cluster.SELECT_role" |
    And I confirm via Node API that the role exists in the database true
    And the role contains the specified resource and permissions in the database true
    And the role contains the specified set of resources and permissions in the database true

  Scenario Outline: Create a new user with Config.Cluster.SELECT_role Role and confirm that the user has the functional permissions granted by the role
    When I create a user with the following options:
      | login                      | <login>         |
      | passwd                     | <passwd>        |
      | passwdConfirm              | <passwdConfirm> |
      | role                       | <role>          |
      | grantOption                | <grantOption>   |
      | mobilePhoneServiceProvider | Verizon         |
      | mobilePhoneNumber          | 111-111-1111    |
    Then I confirm via Node API that the user exists in the database true
    And I validate the following subset of columns for the role <role> on the User page roles tab
      | Role Name |
      | <role>    |
    And I confirm via SQL that the role has been assigned to the user true
    When I assign the role SQLRole to the user
    And I execute the following SQL query
      | query | SELECT * FROM Config.Cluster |
    Then the retrieved row count is <rowCount>
    And the expected data is retrieved
      | CPFName | JoinCluster | Name    | SectionHeader |
      | IRIS    | No          | Cluster | Cluster       |
    Examples:
      | login                      | passwd | passwdConfirm | role                       | grantOption | rowCount |
      | Config.Cluster.SELECT_user | passwd | passwd        | Config.Cluster.SELECT_role | true        | 1        |

  Scenario Outline: Create user with a role via the UI, then remove role <login>
    When I create a user with the following options:
      | login               | <login>               |
      | passwd              | <passwd>              |
      | passwdConfirm       | <passwdConfirm>       |
      | role                | <role>                |
      | grantOption         | <grantOption>         |
      | assigned            | <assigned>            |
      | assignedAfterRemove | <assignedAfterRemove> |
    Then I confirm via Node API that the user exists in the database true
    And I validate the following subset of columns for the role <role> on the User page roles tab
      | Role Name |
      | <role>    |
    And I confirm via SQL that the role has been assigned to the user <assigned>
    When I remove the role <role> from the user
    And I confirm via SQL that the role has been assigned to the user <assignedAfterRemove>
    Examples:
      | login                     | passwd | passwdConfirm | role         | grantOption | assigned | assignedAfterRemove |
      | userAccess%AllRemove      | passwd | passwd        | %All         | false       | true     | false               |
      | userAccessDbDefault       | passwd | passwd        | %DB_%DEFAULT |             | true     | false               |
      | userWithGrantOptionRemove | passwd | passwd        | %All         | true        | true     | false               |

  Scenario Outline: Edit a user to assign a role via the UI and then remove role <login>
    When I create a user with the following options:
      | login               | <login>               |
      | passwd              | <passwd>              |
      | passwdConfirm       | <passwdConfirm>       |
      | grantOption         | <grantOption>         |
      | assigned            | <assigned>            |
      | assignedAfterRemove | <assignedAfterRemove> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the role <role> to the user
    And I add grant option to the role <role>
    And I validate the following subset of columns for the role <role> on the User page roles tab
      | Role Name |
      | <role>    |
    And I confirm via SQL that the new role <role> has been assigned to the user <assigned>
    When I remove the role <role> from the user
    And I confirm via SQL that the new role <role> has been assigned to the user <assignedAfterRemove>
    Examples:
      | login                   | passwd | passwdConfirm | role         | grantOption | assigned | assignedAfterRemove |
      | userAccess%AllEdit      | passwd | passwd        | %All         | false       | true     | false               |
      | userAccessRolesAllEdit  | passwd | passwd        | %DB_%DEFAULT |             | true     | false               |
      | userWithGrantOptionEdit | passwd | passwd        | %All         | true        | true     | false               |

  Scenario Outline: Edit a user to assign a role via the UI, and confirm user can exercise the permissions afforded by the role. Remove role and confirm action not permitted.
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
      | grantOption   | <grantOption>   |
      | assigned      | <assigned>      |
    Then I confirm via Node API that the user exists in the database true
    When I assign the role SQLRole to the user
    When I assign the role <role> to the user
    And I add grant option to the role <role>
    And I validate the following subset of columns for the role <role> on the User page roles tab
      | Role Name |
      | <role>    |
    And I confirm via SQL that the new role <role> has been assigned to the user <assigned>
    And I log out of the application
    And I log into the application as the new user
    And I execute the following SQL query
      | query | SELECT * FROM Config.Cluster |
    Then the retrieved row count is <rowCount>
    And the expected data is retrieved
      | CPFName | JoinCluster | Name    | SectionHeader |
      | IRIS    | No          | Cluster | Cluster       |
    When I log out of the application
    And I log into the application as user _SYSTEM with password SYS
    And I remove the role <role> from the user
    And I log out of the application
    And I log into the application as the new user
    And I execute the following SQL query
      | query | SELECT * FROM Config.Cluster |
    Then the SQL validation elements are confirmed
      | alertText | <alertText> |
    Examples:
      | login                           | passwd | passwdConfirm | role                       | grantOption | assigned | rowCount | alertText                           |
      | Config.Cluster.SELECT_user_edit | passwd | passwd        | Config.Cluster.SELECT_role | false       | true     | 1        | is not privileged for the operation |

    ## SQL Privilege tests
  Scenario Outline: Edit a user to assign an SQL Privilege via the UI and then remove the SQL Privilege <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
      | grantOption   | <grantOption>   |
    Then I confirm via Node API that the user exists in the database true
    When I assign the SQL privilege <privilege> to the user
    And I add grant option to the user SQL privilege <privilege>
    And I validate the following subset of columns for the SQL Privilege <privilege> on the User page SQL Privileges tab
      | SQL Privilege | Granted Via |
      | <privilege>   | Direct      |
    When I remove the privilege <privilege> from the user
    Examples:
      | login              | passwd | passwdConfirm | privilege        | grantOption |
      | userCreateFunction | passwd | passwd        | %CREATE_FUNCTION | false       |
      | userDropFunction   | passwd | passwd        | %DROP_FUNCTION   |             |
      | userCreateMethod   | passwd | passwd        | %CREATE_METHOD   | true        |

  Scenario Outline: Edit a user to assign multiple SQL Privileges via the UI <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the following SQL privileges to the user:
      | SQLPrivilege    | grantOption |
      | %DROP_FUNCTION  | true        |
      | %DROP_PROCEDURE | false       |
      | %ALTER_TABLE    | true        |
    Examples:
      | login                  | passwd | passwdConfirm |
      | userMultiSQLPrivileges | passwd | passwd        |

  Scenario Outline: Edit a user to assign multiple SQL Privileges via the UI and verify the user is able to exercise the SQL Privileges
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the role SQLRole to the user
    When I assign the following SQL privileges to the user:
      | SQLPrivilege  | grantOption |
      | %CREATE_TABLE | true        |
      | %ALTER_TABLE  | false       |
      | %DROP_TABLE   | true        |
    And I execute the following SQL query
      | query | CREATE TABLE newEmployeeTable ( EMPNUM INT NOT NULL, NAMELAST CHAR(30) NOT NULL, NAMEFIRST  CHAR(30) NOT NULL, STARTDATE  TIMESTAMP, SALARY MONEY) |
    Then the retrieved row count is <rowCount>
    When I execute the following SQL query
      | query | GRANT %ALTER, SELECT on newEmployeeTable to SQLRole |
    And I log out of the application
    And I log into the application as the new user
    And I execute the following SQL query
      | query | CREATE TABLE newEmployeeTableCreateTest ( EMPNUM INT NOT NULL, NAMELAST CHAR(30) NOT NULL, NAMEFIRST  CHAR(30) NOT NULL, STARTDATE  TIMESTAMP, SALARY MONEY) |
    Then the retrieved row count is <rowCount>
    When I execute the following SQL query
      | query | select count(*) from newEmployeeTable |
    Then the expected data is retrieved
      | Aggregate_1 |
      | 0           |
    When I execute the following SQL query
      | query | ALTER TABLE newEmployeeTable ADD CONSTRAINT UnqEmpNum UNIQUE (EMPNUM) |
    Then the retrieved row count is <rowCount>
    When I execute the following SQL query
      | query | DROP TABLE newEmployeeTable |
    Then the retrieved row count is <rowCount>
    When I execute the following SQL query
      | query | DROP TABLE newEmployeeTableCreateTest |
    Then the retrieved row count is <rowCount>
    Given I log out of the application
    And I log into the application as user _SYSTEM with password SYS
    And I remove the privilege %CREATE_TABLE from the user
    And I remove the privilege %ALTER_TABLE from the user
    And I remove the privilege %DROP_TABLE from the user
    And I log out of the application
    And I log into the application as the new user
    And I execute the following SQL query
      | query | CREATE TABLE newEmployeeTable ( EMPNUM INT NOT NULL, NAMELAST CHAR(30) NOT NULL, NAMEFIRST  CHAR(30) NOT NULL, STARTDATE  TIMESTAMP, SALARY MONEY) |
    Then the SQL validation elements are confirmed
      | alertText | does not have %CREATE_TABLE privileges |
    When I execute the following SQL query
      | query | ALTER TABLE newEmployeeTable ADD CONSTRAINT UnqEmpNum UNIQUE (EMPNUM) |
    Then the SQL validation elements are confirmed
      | alertText | does not have %ALTER_TABLE privileges |
    When I execute the following SQL query
      | query | DROP TABLE newEmployeeTable |
    Then the SQL validation elements are confirmed
      | alertText | does not have %DROP_TABLE privileges |
    Examples:
      | login                      | passwd | passwdConfirm | rowCount |
      | userCreateAlterDeleteTable | passwd | passwd        | 0        |

    ## SQL Table tests
  Scenario Outline: Edit a user to assign all SQL Tables via the UI  <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the SQL table privilege <table> in schema <schema> to the user
    Examples:
      | login         | passwd | passwdConfirm | table | schema |
      | userAllTables | passwd | passwd        | All   | %SYS   |

  Scenario Outline: Edit a user to assign an SQL Table via the UI and then revoke the SQL Table privilege <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the SQL table privilege <table> in schema <schema> to the user
    And I validate the following subset of columns for the SQL Table <table> in schema <schema> on the User page SQL Tables tab
      | Name    | %ALTER | SELECT | UPDATE | INSERT | DELETE | Granted Via | Granted By |
      | <table> | -      | º      | -      | -      | -      | Direct      | _SYSTEM    |
    And I edit the user SQL table privilege <table> to add the following permissions:
      | permissions  | select,update        |
      | grantOptions | select,insert,delete |
    And I validate the following subset of columns for the SQL Table <table> in schema <schema> on the User page SQL Tables tab
      | Name    | %ALTER | SELECT | UPDATE | INSERT | DELETE | Granted Via | Granted By |
      | <table> | -      | •      | º      | •      | •      | Direct      | _SYSTEM    |
    When I revoke the SQL table privilege <table> from the user
    Examples:
      | login               | passwd | passwdConfirm | table          | schema             |
      | userTableDefinition | passwd | passwd        | Definition     | %DeepSee_Dashboard |
      | userCreateMethod    | passwd | passwd        | SQLObjectQuery | %SYS               |

  Scenario Outline: Edit a user to assign multiple SQL Tables and table permissions via the UI <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the following SQL table privileges to the user:
      | schema       | %Monitor                                      |
      | tables       | Alert, AlertLog, Application, Item, ItemGroup |
      | permissions  | update, delete, references                    |
      | grantOptions | insert, select                                |
    And I edit the user SQL table privilege <table> to add the following permissions:
      | permissions  | select,update        |
      | grantOptions | update,insert,delete |
    When I revoke the SQL table privilege <table> from the user
    Examples:
      | login           | passwd | passwdConfirm | table    |
      | userMultiTables | passwd | passwd        | AlertLog |

  Scenario Outline: Edit a user to assign multiple SQL Tables and table permissions via the UI and verify the user is able to exercise the specified permissions
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    Given I assign the role SQLRole to the user
    And I assign the following SQL privileges to the user:
      | SQLPrivilege  | grantOption |
      | %DROP_TABLE   | false       |
      | %ALTER_TABLE  | false       |
      | %CREATE_TABLE | false       |
    And I execute the following SQL query
      | query | CREATE TABLE EmployeeTable ( EMPNUM INT NOT NULL, NAMELAST CHAR(30) NOT NULL, NAMEFIRST  CHAR(30) NOT NULL, STARTDATE  TIMESTAMP, SALARY MONEY) |
    Then the retrieved row count is 0
    When I assign the following SQL table privileges to the user:
      | schema       | SQLUser                           |
      | tables       | EmployeeTable                     |
      | permissions  | alter, update, delete, references |
      | grantOptions | insert, select                    |
    Then I log out of the application
    And I log into the application as the new user
    When I execute the following SQL query
      | query | INSERT INTO EmployeeTable  (EMPNUM,NAMELAST,NAMEFIRST,SALARY) VALUES (12345,'Boswell','Harry',50000) |
    And I execute the following SQL query
      | query | select * from EmployeeTable |
    Then the expected data is retrieved
      | EMPNUM | NAMELAST | NAMEFIRST | SALARY     |
      | 12345  | Boswell  | Harry     | 50000.0000 |
    When I execute the following SQL query
      | query | UPDATE EmployeeTable  set NAMEFIRST='Norbert', NAMELAST='Smith' |
    And I execute the following SQL query
      | query | select * from EmployeeTable |
    Then the expected data is retrieved
      | EMPNUM | NAMELAST | NAMEFIRST | SALARY     |
      | 12345  | Smith    | Norbert   | 50000.0000 |
    When I execute the following SQL query
      | query | DELETE FROM EmployeeTable  WHERE NAMEFIRST='Norbert' AND NAMELAST='Smith' |
    Then the retrieved row count is 1
    And I execute the following SQL query
      | query | select count(*) from EmployeeTable |
    Then the expected data is retrieved
      | Aggregate_1 |
      | 0           |
    When I execute the following SQL query
      | query | ALTER TABLE EmployeeTable ADD CONSTRAINT UnqEmpNum UNIQUE (EMPNUM) |
    Then the retrieved row count is 0
    And I execute the following SQL query
      | query | CREATE TABLE ManagerTableRefs ( MANNUM INT NOT NULL, EMPNUM INT NOT NULL REFERENCES EMPLOYEETABLE(EMPNUM), NAMELAST CHAR(30) NOT NULL, NAMEFIRST  CHAR(30) NOT NULL, STARTDATE  TIMESTAMP, SALARY MONEY) |
    Then the retrieved row count is 0
    Then I log out of the application
    And I log into the application as user _SYSTEM with password SYS
    When I revoke the SQL table privilege SQLUser.EmployeeTable from the user
    Then I log out of the application
    And I log into the application as the new user
    When I execute the following SQL query
      | query | INSERT INTO EmployeeTable  (EMPNUM,NAMELAST,NAMEFIRST,SALARY) VALUES (33333,'Brown','Scott',50000) |
    And I execute the following SQL query
      | query | select * from EmployeeTable |
    Then the SQL validation elements are confirmed
      | alertText | is not privileged for the operation |
    When I execute the following SQL query
      | query | UPDATE EmployeeTable  set NAMEFIRST='Norbert', NAMELAST='Smith' |
    Then the SQL validation elements are confirmed
      | alertText | is not privileged for the operation |
    When I execute the following SQL query
      | query | DELETE FROM EmployeeTable  WHERE NAMEFIRST='Norbert' AND NAMELAST='Smith' |
    Then the SQL validation elements are confirmed
      | alertText | is not privileged for the operation |
    When I execute the following SQL query
      | query | ALTER TABLE EmployeeTable ADD CONSTRAINT UnqEmpNum UNIQUE (EMPNUM) |
    Then the SQL validation elements are confirmed
      | errorMessage | does not have required %ALTER privilege needed to change the table definition for |
    And I execute the following SQL query
      | query | CREATE TABLE ManagerTableRefs1 ( MANNUM INT NOT NULL, EMPNUM INT NOT NULL REFERENCES EMPLOYEETABLE(EMPNUM), NAMELAST CHAR(30) NOT NULL, NAMEFIRST  CHAR(30) NOT NULL, STARTDATE  TIMESTAMP, SALARY MONEY) |
    Then the SQL validation elements are confirmed
      | errorMessage | does not have required REFERENCES privilege needed to create foreign key |
    And I execute the following SQL query
      | query | DROP TABLE ManagerTableRefs |
    And I execute the following SQL query
      | query | DROP TABLE EmployeeTable |
    Examples:
      | login                      | passwd | passwdConfirm |
      | userMultiTablesPermissions | passwd | passwd        |

    ## SQL View tests
  Scenario Outline: Edit a user to assign all SQL Views via the UI  <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the SQL view privilege <view> in schema <schema> to the user
    Examples:
      | login         | passwd | passwdConfirm | view | schema |
      | userAllTables | passwd | passwd        | All  | %iFind |

  Scenario Outline: Edit a user to assign an SQL View via the UI and then revoke the SQL View privilege <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the SQL view privilege <view> in schema <schema> to the user
    And I validate the following subset of columns for the user SQL View <view> in schema <schema> on the User page SQL Views tab
      | Name   | %ALTER | SELECT | UPDATE | INSERT | DELETE | REFERENCES | Granted Via | Granted By |
      | <view> | -      | º      | -      | -      | -      | -          | Direct      | _SYSTEM    |
    And I edit the user SQL view privilege <view> to add the following permissions:
      | permissions  | select,update        |
      | grantOptions | select,insert,delete |
    And I validate the following subset of columns for the user SQL View <view> in schema <schema> on the User page SQL Views tab
      | Name   | %ALTER | SELECT | UPDATE | INSERT | DELETE | REFERENCES | Granted Via | Granted By |
      | <view> | -      | •      | º      | •      | •      | -          | Direct      | _SYSTEM    |
    When I revoke the SQL view privilege <view> from the user
    Examples:
      | login            | passwd | passwdConfirm | view         | schema      |
      | userCompToWord   | passwd | passwd        | CompToWord   | %iFind      |
      | userStatsSQLView | passwd | passwd        | StatsSQLView | %SYS_PTools |

  Scenario Outline: Edit a user to assign multiple SQL Views and view permissions via the UI <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the following SQL view privileges to the user:
      | schema       | %SYS_PTools                                       |
      | views        | SQLStatsView, StatsSQLView, UtilSQLAnalysisDBView |
      | permissions  | update, delete, references                        |
      | grantOptions | insert, select                                    |
    And I edit the user SQL view privilege <view> to add the following permissions:
      | permissions  | select,update        |
      | grantOptions | update,insert,delete |
    When I revoke the SQL view privilege <view> from the user
    Examples:
      | login          | passwd | passwdConfirm | view         |
      | userMultiViews | passwd | passwd        | SQLStatsView |

  Scenario Outline: Edit a user to assign multiple SQL Views and view permissions via the UI <login>  and verify user can exercise view permissions
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    Given I assign the role SQLRole to the user
    And I assign the following SQL privileges to the user:
      | SQLPrivilege | grantOption |
      | %DROP_VIEW   | false       |
      | %DROP_TABLE  | false       |
      | %ALTER_VIEW  | false       |
      | %CREATE_VIEW | false       |
    And I execute the following SQL query
      | query | CREATE Table EmployeeTable2 ( EMPNUM INT NOT NULL, NAMELAST CHAR(30) NOT NULL, NAMEFIRST  CHAR(30), STARTDATE  TIMESTAMP, SALARY MONEY) |
    When I execute the following SQL query
      | query | INSERT INTO EmployeeTable2  (EMPNUM,NAMELAST,NAMEFIRST,SALARY) VALUES (12345,'Boswell','Harry',50000) |
    And I execute the following SQL query
      | query | CREATE VIEW EmployeeView (EMPNUM, NAMELAST, SALARY) AS SELECT EMPNUM, NAMELAST, SALARY from EmployeeTable2 |
    When I assign the following SQL view privileges to the user:
      | schema       | SQLUser                          |
      | views        | EmployeeView                     |
      | permissions  | alter,update, delete, references |
      | grantOptions | insert, select                   |
    And I log out of the application
    And I log into the application as the new user
    And I execute the following SQL query
      | query | SELECT * FROM EmployeeView |
    Then the expected data is retrieved
      | EMPNUM | NAMELAST | SALARY     |
      | 12345  | Boswell  | 50000.0000 |
    And I execute the following SQL query
      | query | INSERT INTO EMPLOYEEVIEW (EMPNUM,NAMELAST,SALARY) Values ('22222','Jones',70000) |
    And I execute the following SQL query
      | query | SELECT * FROM EmployeeView |
    Then the expected data is retrieved
      | EMPNUM | NAMELAST | SALARY     |
      | 12345  | Boswell  | 50000.0000 |
      | 22222  | Jones    | 70000.0000 |
    And I execute the following SQL query
      | query | UPDATE EMPLOYEEVIEW SET SALARY=80000 where NAMELAST='Jones' |
    And I execute the following SQL query
      | query | SELECT * FROM EmployeeView |
    Then the expected data is retrieved
      | EMPNUM | NAMELAST | SALARY     |
      | 12345  | Boswell  | 50000.0000 |
      | 22222  | Jones    | 80000.0000 |
     ## Was not working due to PL 162732: (Dev) [Security] User having SQL View permissions to delete from a view cannot exercise those permissions
    And I execute the following SQL query
      | query | DELETE FROM EMPLOYEEVIEW where NAMELAST='Boswell' |
    And I execute the following SQL query
      | query | SELECT * FROM EmployeeView |
    Then the expected data is retrieved
      | EMPNUM | NAMELAST | SALARY     |
      | 22222  | Jones    | 80000.0000 |
    When I execute the following SQL query
      | query | ALTER VIEW EmployeeView (EMPNUM, NAMEFIRST, SALARY) AS SELECT EMPNUM, NAMEFIRST, SALARY from EmployeeTable2 |
    Then the retrieved row count is 0
    Then I log out of the application
    And I log into the application as user _SYSTEM with password SYS
    When I revoke the SQL view privilege EmployeeView from the user
    And I log out of the application
    And I log into the application as the new user
    When I execute the following SQL query
      | query | INSERT INTO EmployeeView (EMPNUM,NAMEFIRST,SALARY) Values ('33333','George',90000) |
    Then the SQL validation elements are confirmed
      | alertText | is not privileged for the operation |
    And I execute the following SQL query
      | query | select * from EmployeeView |
    Then the SQL validation elements are confirmed
      | alertText | is not privileged for the operation |
    When I execute the following SQL query
      | query | UPDATE EmployeeView SET SALARY=80000 where NAMEFIRST='George' |
    Then the SQL validation elements are confirmed
      | alertText | is not privileged for the operation |
    When I execute the following SQL query
      | query | DELETE FROM EmployeeView where NAMEFIRST='George' |
    Then the SQL validation elements are confirmed
      | alertText | is not privileged for the operation |
    When I execute the following SQL query
      | query | ALTER VIEW EmployeeView (EMPNUM, NAMELAST, SALARY) AS SELECT EMPNUM, NAMELAST, SALARY from EmployeeTable2 |
    Then the SQL validation elements are confirmed
      | errorMessage | does not have required %ALTER privilege needed to change the table definition for |
    And I execute the following SQL query
      | query | DROP VIEW EmployeeView |
    And I execute the following SQL query
      | query | DROP TABLE EmployeeTable2 |
    Examples:
      | login                      | passwd | passwdConfirm |
      | userViewPermissionsConfirm | passwd | passwd        |

    ## SQL Procedure tests
  Scenario Outline: Edit a user to assign all SQL Procedures via the UI  <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the SQL procedure privilege <procedure> in schema <schema> to the user
    Examples:
      | login         | passwd | passwdConfirm | procedure | schema |
      | userAllTables | passwd | passwd        | All       | %iKnow |

  Scenario Outline: Edit a user to assign an SQL Procedure via the UI and then revoke the SQL Procedure privilege <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the SQL procedure privilege <procedure> in schema <schema> to the user
    And I validate the following subset of columns for the SQL Procedure <procedure> in schema <schema> on the User page SQL Procedures tab
      | Name        | EXECUTE | Granted Via | Granted By |
      | <procedure> | º       | Direct      | _SYSTEM    |
    And I edit the user SQL procedure privilege <procedure> to add the following permissions:
      | permissions  | execute |
      | grantOptions | execute |
    And I validate the following subset of columns for the SQL Procedure <procedure> in schema <schema> on the User page SQL Procedures tab
      | Name        | EXECUTE | Granted Via | Granted By |
      | <procedure> | •       | Direct      | _SYSTEM    |
    When I revoke the SQL procedure privilege <procedure> from the user
    Examples:
      | login                   | passwd | passwdConfirm | procedure            | schema |
      | userConfigurationExtent | passwd | passwd        | Configuration_Extent | %iKnow |
      | userDomainExtent        | passwd | passwd        | Domain_Extent        | %iKnow |

  Scenario Outline: Edit a user to assign multiple SQL Procedures and procedure permissions via the UI <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the following SQL procedure privileges to the user:
      | schema       | %Studio                                           |
      | procedures   | BreakPoint_Extent, Project_Extent, Package_Extent |
      | permissions  | execute                                           |
      | grantOptions |                                                   |
    And I edit the user SQL procedure privilege <procedure> to add the following permissions:
      | permissions  | execute |
      | grantOptions | execute |
    When I revoke the SQL procedure privilege <procedure> from the user
    Examples:
      | login               | passwd | passwdConfirm | procedure         |
      | userMultiProcedures | passwd | passwd        | BreakPoint_Extent |

  Scenario Outline: Edit a user to assign multiple SQL Procedures and procedure permissions via the UI <login> and verify user can exercise the permissions
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    Given I assign the role SQLRole to the user
    When I assign the following SQL procedure privileges to the user:
      | schema       | %Calendar    |
      | procedures   | Hijri_Extent |
      | permissions  | execute      |
      | grantOptions |              |
    And I log out of the application
    And I log into the application as the new user
    And I execute the following SQL query
      | query | CALL %Calendar.Hijri_Extent() |
    Then the retrieved row count is 0
    And I log out of the application
    And I log into the application as user _SYSTEM with password SYS
    Then I revoke the SQL procedure privilege %Calendar.Hijri_Extent from the user
    And I log out of the application
    And I log into the application as the new user
    And I execute the following SQL query
      | query | CALL %Calendar.Hijri_Extent() |
    Then the SQL validation elements are confirmed
      | alertText | <alertText> |
    Examples:
      | login                                 | passwd | passwdConfirm | alertText                           |
      | userCalendarHijriAssignRevokeValidate | passwd | passwd        | is not privileged for the operation |

    ## SQL ML Configuration tests
  Scenario Outline: Edit a user to assign all SQL MLConfigurations via the UI  <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the SQL MLConfiguration privilege <MLConfiguration> in namespace <namespace> to the user
    Examples:
      | login            | passwd | passwdConfirm | MLConfiguration | namespace |
      | userAllMLConfigs | passwd | passwd        | All             | %SYS      |

  Scenario Outline: Edit a user to assign an SQL MLConfiguration via the UI and then revoke the SQL MLConfiguration privilege <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the SQL MLConfiguration privilege <MLConfiguration> in namespace <namespace> to the user
    And I validate the following subset of columns for the SQL MLConfiguration <MLConfiguration> in namespace <namespace> on the User page SQL MLConfigurations tab
      | Name              | USE | Granted Via | Granted By |
      | <MLConfiguration> | º   | Direct      | _SYSTEM    |
    When I revoke the SQL MLConfiguration privilege <MLConfiguration> from the user in namespace <namespace>
    Examples:
      | login     | passwd | passwdConfirm | MLConfiguration | namespace |
      | user%H2O  | passwd | passwd        | %H2O            | %SYS      |
      | user%PMML | passwd | passwd        | %PMML           | %SYS      |

  Scenario Outline: Edit a user to assign multiple SQL MLConfigurations and MLConfiguration permissions via the UI <login>
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    When I assign the following SQL MLConfiguration privileges in namespace <namespace> to the user:
      | MLConfigurations | %H2O, %PMML |
      | permissions      | use         |
      | grantOptions     |             |
    When I revoke the SQL MLConfiguration privilege <MLConfiguration> from the user in namespace <namespace>
    Examples:
      | login                     | passwd | passwdConfirm | MLConfiguration | namespace |
      | userMultiMLConfigurations | passwd | passwd        | %H2O            | %SYS      |

  Scenario Outline: Edit a user to assign multiple SQL MLConfigurations and MLConfiguration permissions via the UI <login> and verify user can exercise the permissions
    When I create a user with the following options:
      | login         | <login>         |
      | passwd        | <passwd>        |
      | passwdConfirm | <passwdConfirm> |
    Then I confirm via Node API that the user exists in the database true
    Given I assign the role SQLRole to the user
    When I assign the following SQL MLConfiguration privileges in namespace <namespace> to the user:
      | MLConfigurations | %AutoML |
      | permissions      | use     |
      | grantOptions     |         |
    And I log out of the application
    And I log into the application as the new user
    And I execute the following SQL query
      | query | SET ML CONFIGURATION %AutoML |
    Then the retrieved row count is 1
    And I log out of the application
    And I log into the application as user _SYSTEM with password SYS
    Then I revoke the SQL MLConfiguration privilege %AutoML from the user in namespace <namespace>
    And I log out of the application
    And I log into the application as the new user
    And I execute the following SQL query
      | query | SET ML CONFIGURATION %AutoML |
    Then the SQL validation elements are confirmed
      | alertText | <alertText> |
    Examples:
      | login       | passwd | passwdConfirm | alertText                           | namespace |
      | user%AutoML | passwd | passwd        | is not privileged for the operation | %SYS      |

  Scenario Outline: Delete role <name>
    Given I navigate to the Roles page
    When I delete the following role <name>
    Then I log out of the application
    Examples:
      | name                       |
      | Config.Cluster.SELECT_role |
      | SQLRole                    |
