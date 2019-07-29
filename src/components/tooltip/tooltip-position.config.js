import { styleElement } from '../../utils/ether';

/**
 * Update a CSS position attribute of the tooltip,
 * if the new value is different from the existing value.
 *
 * @param {Object} tooltip
 * @param {string} attribute
 * @param {number} pixels
 */
function setPositionAttributeIfChanged(tooltip, attribute, pixels) {
  const pixelsString = `${Math.round(pixels)}px`;
  if (tooltip.style[attribute] !== pixelsString) {
    styleElement(tooltip, attribute, pixelsString);
  }
}

/**
 * Positions tooltip relative to target
 *
 * @method positionTooltip
 * @param {Object} tooltip
 * @param {Object} target
 * @param {string} position
 * @param {string} alignment
 * @return {Object} New coordinates of tooltip
 */
export default function positionTooltip(tooltip, target, position, alignment) {
  // Width and height of the <Tooltip> component's <div>
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;

  const pointerDimension = 15;
  // hardcode height & width since span has no dimensions
  const pointerOffset = 11;

  // Width and height of the target element
  const targetWidth = target.offsetWidth;
  const targetHeight = target.offsetHeight;

  // Coordinates of the target element (relative to the viewport)
  const targetRect = target.getBoundingClientRect();

  // Vertical scrolling offset of the viewport
  const offsetY = window.pageYOffset;

  // Coordinates of the target element (absolute)
  const targetTop = targetRect.top + offsetY;
  const targetBottom = targetRect.bottom + offsetY;
  const targetLeft = targetRect.left;
  const targetRight = targetRect.right;

  const horizontalAlign = {
    center: (targetLeft - (tooltipWidth * 0.5)) + (targetWidth * 0.5),
    right: (targetLeft + pointerDimension + pointerOffset) - tooltipWidth,
    left: targetLeft - (pointerDimension * 0.5)
  };

  const verticalAlign = {
    top: targetTop - pointerOffset,
    bottom: (targetTop - tooltipHeight) + targetHeight + pointerOffset,
    center: (targetTop + (targetHeight * 0.5)) - (tooltipHeight * 0.5)
  };

  let x = 0;
  let y = 0;

  if (position === 'top') y = targetTop - tooltipHeight - (pointerDimension * 0.5);
  if (position === 'bottom') y = targetBottom + (pointerDimension * 0.5);
  if (position === 'left') x = targetLeft - (pointerDimension * 0.5) - tooltipWidth;
  if (position === 'right') x = targetRight + (0.5 * pointerDimension);

  if (['top', 'bottom'].includes(position)) x = horizontalAlign[alignment];
  if (['left', 'right'].includes(position)) y = verticalAlign[alignment];

  setPositionAttributeIfChanged(tooltip, 'left', x);
  setPositionAttributeIfChanged(tooltip, 'top', y);

  return { x, y };
}
