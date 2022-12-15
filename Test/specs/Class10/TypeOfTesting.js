/**
 * Types of testing:
 * 
 *      1. Data Driven Testing (DDT)
 *      2. Behavior Driven Development (BDD)
 *      3. Test Driven Development (TDD)
 *      4. Parallel Testing
 *      5. Cross browser Testing
 * 
 * 
 *      1. Data Driven Testing (DDT)
 *          Testcase which are having same steps but with different data
 *              eg: Verify user gets error msg for invalid credentials.
 * 
 *                  Verify user can make payment using payment method - Debit Card
 *                  Verify user can make payment using payment method - Credit Card
 * 
 * 
 *      2. Behavior Driven Development (BDD) - Cucumber (Scenarios)
 *          In this, we create testcases (or Scenarios) to mimic user behavior.
 * 
 * 
 *      3. Test Driven Development (TDD)
 *          In this, testcases will be performed in order to determine whether development is done or not.
 * 
 * Ticket -> Dev -> QA -> Done
 * 
 * Requirement Analysis -> Create testcase -> link testcases with the Ticket -> Ticket -> Dev 
 *      -> Dev will perform all linked testcases -> if all testcases passed -> Done
 * 
 * 
 *      4. Parallel Testing
 *          Running multiple testcases simultaneously.
 *          In mocha-framework or Cucumber-framework, maxInstances will define the number of testcases can run simultaneously
 * 
 * 
 *      5. Cross browser Testing
 *          When we run same testcases on different browsers, it called Cross browser testing.         
 * 
 *
 * 
 * 
 */            