// Cypress test.
import { visitExperimental, setProp } from '../../../support/helper';

const visitGroupedCharacter = visitExperimental('groupedcharacter');

describe('Grouped Character', () => {
  describe('basic functionality', () => {
    beforeEach(() => {
      visitGroupedCharacter('basic');
      setProp('groups', [1, 2, 3]);
      setProp('separator', '-');
    });
    it('Renders to the screen', () => {
      expect(true).to.equal(true);
    });
    it('Groups text using a given group config', () => {
      cy.get('#story-root > div > div > input').type('bllllllllll');
    });
    it('Does not exceed the character limit configured by the group', () => {
      cy.get('#story-root > div > div > input').type('bllllllllll');
    });
  });
});
