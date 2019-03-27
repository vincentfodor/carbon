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
    it('Groups text using a given group config', () => {
      const input = cy.iFrame('[data-component="input"]');
      input.type(testInput);
      input.should('have.value', expectedOutput);
    });
    it('Does not exceed the character limit configured by the group', () => {
      const input = cy.iFrame('[data-component="input"]');
      input.type(`${testInput}${'7'}`);
      input.should('have.value', expectedOutput);
    });
    it('deletes separators when a character just after it is deleted', () => {
      const input = cy.iFrame('[data-component="input"]');
      input.type(`${testInput}${keys.backspace.repeat(3)}`);
      input.should('have.value', '1-23');
      input.type(`${testInput}${keys.backspace.repeat(5)}`);
      input.should('have.value', '1');
    });
    it.only('allows separators with a length greater than one', () => {
      cy.iFrame('[data-component="input"]').then(() => {
        setProp('separator', '--');
        cy.getComponent('input').type(`${testInput}`);
        cy.getComponent('input').should('have.value', '1--23--456');

      });
    });
  });
});
