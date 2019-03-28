// Cypress test.
import { visitExperimental, setProp } from '../../../support/helper';
import keys from '../../../support/keyboard';

const visitGroupedCharacter = visitExperimental('groupedcharacter');

const testInput = '123456';
const expectedOutput = '1-23-456';

describe('Grouped Character', () => {
  describe('basic functionality', () => {
    beforeEach(() => {
      visitGroupedCharacter('basic');
      setProp('groups', [1, 2, 3]);
      setProp('separator', '-');
    });
    it('renders an input', () => {
      cy.getComponent('input');
    });
    it('Groups text using a given group config', () => {
      cy.getComponent('input')
        .type(testInput)
        .should('have.value', expectedOutput);
    });
    it('Does not exceed the character limit configured by the group', () => {
      cy.getComponent('input')
        .type(`${testInput}${'7'}`)
        .should('have.value', expectedOutput);
    });
    it('deletes separators when a character just after it is deleted', () => {
      cy.getComponent('input')
        .type(`${testInput}${keys.backspace.repeat(3)}`)
        .should('have.value', '1-23')
        .type(`${testInput}${keys.backspace.repeat(5)}`)
        .should('have.value', '1');
    });
  });
});
