import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Checkbox from '.';
import baseTheme from '../../../style/themes/base';
import classicTheme from '../../../style/themes/classic';
import { assertStyleMatch } from '../../../__spec_helper__/test-utils';

import FieldHelpStyle from '../field-help/field-help.style';
import HiddenCheckboxStyle from './hidden-checkbox.style';
import LabelStyle from '../label/label.style';
import StyledHelp from '../help/help.style';

const mountRender = (props) => {
  return mount(<Checkbox { ...props } />);
};

describe('Checkbox', () => {
  describe('base theme', () => {
    it('renders as expected', () => {
      expect(mountRender()).toMatchSnapshot();
    });

    describe('renders the appropriate styles when size=large', () => {
      const wrapper = mountRender({ size: 'large' });

      it('.carbon-checkbox__input', () => {
        assertStyleMatch({
          height: '24px',
          padding: '2px',
          width: '24px'
        }, wrapper.find('.carbon-checkbox__input'));
      });

      it('HiddenCheckboxStyle', () => {
        assertStyleMatch({
          height: '24px',
          padding: '2px',
          width: '24px'
        }, wrapper.find(HiddenCheckboxStyle));
      });

      it('HiddenCheckboxStyle + svg', () => {
        assertStyleMatch({
          height: '24px',
          padding: '2px',
          width: '24px'
        }, wrapper.find(`${HiddenCheckboxStyle} + svg`));
      });

      it('FieldHelpStyle', () => {
        assertStyleMatch({
          marginLeft: '24px',
          paddingLeft: '8px'
        }, wrapper.find(FieldHelpStyle));
      });

      it('LabelStyle', () => {
        assertStyleMatch({
          paddingBottom: '4px',
          paddingLeft: '8px',
          paddingTop: '4px'
        }, wrapper.find(LabelStyle));
      });
    });

    describe('renders the appropriate styles when checked=true', () => {
      it('default', () => {
        const wrapper = mountRender({ checked: true });

        assertStyleMatch({
          fill: baseTheme.colors.primary
        }, wrapper.find('svg path'));
      });

      it('disabled=true', () => {
        const wrapper = mountRender({ checked: true, disabled: true });

        assertStyleMatch({
          fill: baseTheme.disabled.border
        }, wrapper.find('svg .checkbox-check'));
      });
    });

    describe('renders the appropriate styles when disabled=true', () => {
      const wrapper = mountRender({ disabled: true });
      const disabledHoverFocusStyles = {
        outline: 'none',
        cursor: 'not-allowed'
      };

      it('LabelStyle', () => {
        assertStyleMatch({
          color: baseTheme.disabled.disabled
        }, wrapper.find(LabelStyle));
      });

      it('StyledHelp', () => {
        assertStyleMatch({
          color: baseTheme.disabled.disabled
        }, wrapper.find(StyledHelp));
      });

      it('svg', () => {
        assertStyleMatch({
          backgroundColor: baseTheme.disabled.input,
          border: `1px solid ${baseTheme.disabled.border}`
        }, wrapper.find('svg'));
      });

      it('HiddenCheckboxStyle:hover', () => {
        assertStyleMatch(
          disabledHoverFocusStyles,
          wrapper.find(HiddenCheckboxStyle).simulate('hover')
        );
      });

      it('HiddenCheckboxStyle:focus', () => {
        assertStyleMatch(
          disabledHoverFocusStyles,
          wrapper.find(HiddenCheckboxStyle).simulate('focus')
        );
      });

      it('LabelStyle:hover', () => {
        assertStyleMatch(
          disabledHoverFocusStyles,
          wrapper.find(LabelStyle).simulate('hover')
        );
      });

      it('LabelStyle:focus', () => {
        assertStyleMatch(
          disabledHoverFocusStyles,
          wrapper.find(LabelStyle).simulate('focus')
        );
      });

      it('svg:hover', () => {
        assertStyleMatch(
          disabledHoverFocusStyles,
          wrapper.find('svg').simulate('hover')
        );
      });

      it('svg:focus', () => {
        assertStyleMatch(
          disabledHoverFocusStyles,
          wrapper.find('svg').simulate('focus')
        );
      });
    });

    it('renders the appropriate styles when error=true', () => {
      const wrapper = mountRender({ error: true });

      assertStyleMatch({
        border: `1px solid ${baseTheme.colors.error}`
      }, wrapper.find('svg'));
    });

    describe('renders the appropriate styles when fieldHelpInline=true', () => {
      it('default', () => {
        const wrapper = mountRender({ fieldHelpInline: true });

        assertStyleMatch({
          display: 'inline',
          margin: '0',
          width: 'auto'
        }, wrapper.find(FieldHelpStyle));
      });

      it('size=large', () => {
        const wrapper = mountRender({ fieldHelpInline: true, size: 'large' });

        assertStyleMatch({
          paddingTop: '4px',
          paddingBottom: '4px'
        }, wrapper.find(FieldHelpStyle));
      });
    });

    describe('renders the appropriate styles when setting a custom inputWidth', () => {
      describe('default', () => {
        const wrapper = mountRender({ inputWidth: 50 });

        it('.carbon-checkbox__input', () => {
          assertStyleMatch({
            width: '50%'
          }, wrapper.find('.carbon-checkbox__input'));
        });

        it('FieldHelpStyle', () => {
          assertStyleMatch({
            marginLeft: '50%'
          }, wrapper.find(FieldHelpStyle));
        });
      });

      it('reversed', () => {
        const wrapper = mountRender({ inputWidth: 50, reverse: true });

        assertStyleMatch({
          marginRight: '50%'
        }, wrapper.find(FieldHelpStyle));
      });
    });

    it('renders the appropriate styles when setting a custom labelWidth', () => {
      const wrapper = mountRender({ labelWidth: 50 });

      assertStyleMatch({
        width: '50%'
      }, wrapper.find(LabelStyle));
    });

    describe('renders the appropriate styles when reverse=true', () => {
      it('default', () => {
        const wrapper = mountRender({ reverse: true });

        assertStyleMatch({
          marginLeft: '0'
        }, wrapper.find(FieldHelpStyle));
      });

      it('fieldHelpInline=true', () => {
        const wrapper = mountRender({ fieldHelpInline: true, reverse: true });

        assertStyleMatch({
          paddingLeft: '6px'
        }, wrapper.find('.carbon-checkbox__input'));
      });
    });
  });

  describe('Classic theme', () => {
    const opts = { theme: classicTheme };

    it('renders as expected', () => {
      expect(mountRender(opts)).toMatchSnapshot();
    });

    it('renders the appropriate styles when checked=true', () => {
      describe('default', () => {
        expect(mountRender({ checked: true, ...opts })).toMatchSnapshot();
      });

      describe('and disabled=true', () => {
        expect(mountRender({ checked: true, disabled: true, ...opts })).toMatchSnapshot();
      });
    });

    it('renders the appropriate styles when disabled=true', () => {
      expect(mountRender({ disabled: true, ...opts })).toMatchSnapshot();
    });

    it('renders the appropriate styles when fieldHelpInline=true and reverse=true', () => {
      expect(mountRender({ fieldHelpInline: true, reverse: true, ...opts })).toMatchSnapshot();
    });
  });
});
