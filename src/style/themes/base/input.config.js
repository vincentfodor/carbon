export default palette => ({
  borderColor: palette.slateTint(40),
  gutter: '16px',

  disabled: {
    backgroundColor: palette.slateTint(95),
    borderColor: palette.slateTint(80)
  },
  hover: {
    borderColor: palette.slateTint(40)
  },
  active: {
    border: `outline: 3px solid ${palette.gold};`
  },
  validation: {
    borderWidth: '2px'
  },
  fieldHelp: {
    color: 'inherit',
    marginSide: '0px',
    marginTop: '8px'
  },
  label: {
    marginSide: '0px'
  }
});
