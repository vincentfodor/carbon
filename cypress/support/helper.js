import { knobsTab } from "../locators/commonLocators";

export function visitComponentUrl(url) {
    // cy.server()
    // cy.route('/?path=/story/*').as('getAccount')
    cy.visit(Cypress.env(url));
    knobsTab().click();
};

export const visitStoryFor = (...path) => {
    const last = path.pop();
    path[path.length - 1]
    const root = Cypress.env('storybook');
    cy.visit(`${root}${path.join('-')}--${last}`);
};

export const visitExperimental = name => (...path) => visitStoryFor(['experimental', ...path]);

const typeSafeInput = (input) => {
  let toWrite = input;

  if (Array.isArray(input)) toWrite = `[${String(input)}]`;

  return toWrite;
};

export const setProp = (name, value) => {
  knobsTab().click();
  cy.get(`[name=${name}]`).clear().type(typeSafeInput(value));
};

