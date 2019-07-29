import { startCase } from 'lodash';
import { styleElement } from '../../utils/ether';

/**
 * Calculates position for tooltip.
 *
 * @method calculatePosition
 * @param {Object} tooltip
 * @param {Object} target
 * @return {Object} shifts calculated
 */
function calculatePosition(tooltip, target) {
  const tooltipWidth = tooltip.offsetWidth,
      tooltipHeight = tooltip.offsetHeight,
      pointerDimension = 15,
      // hardcode height & width since span has no dimensions
      pointerOffset = 11,
      targetWidth = target.offsetWidth,
      targetHeight = target.offsetHeight,
      targetRect = target.getBoundingClientRect(),
      offsetY = window.pageYOffset,
      targetTop = targetRect.top + offsetY,
      targetBottom = targetRect.bottom + offsetY,
      targetLeft = targetRect.left,
      targetRight = targetRect.right;

  const shifts = {
    verticalY: targetTop - tooltipHeight - (pointerDimension * 0.5),
    verticalBottomY: targetBottom + (pointerDimension * 0.5),
    verticalCenter: (targetLeft - (tooltipWidth * 0.5)) + (targetWidth * 0.5),
    verticalRight: (targetLeft + pointerDimension + pointerOffset) - tooltipWidth,
    verticalLeft: targetLeft - (pointerDimension * 0.5),
    rightHorizontal: targetRight + (0.5 * pointerDimension),
    leftHorizontal: targetLeft - (pointerDimension * 0.5) - tooltipWidth,
    sideTop: targetTop - pointerOffset,
    sideBottom: (targetTop - tooltipHeight) + targetHeight + pointerOffset,
    sideCenter: (targetTop + (targetHeight * 0.5)) - (tooltipHeight * 0.5)
  };

  return shifts;
}

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
  const shifts = calculatePosition(tooltip, target);

  let x = 0;
  let y = 0;

  switch (position) {
    case 'top':
      x = shifts[`vertical${startCase(alignment)}`];
      y = shifts.verticalY;
      break;

    case 'bottom':
      x = shifts[`vertical${startCase(alignment)}`];
      y = shifts.verticalBottomY;
      break;

    case 'left':
      x = shifts[`${position}Horizontal`];
      y = shifts[`side${startCase(alignment)}`];
      break;

    case 'right':
    default:
      x = shifts[`${position}Horizontal`];
      y = shifts[`side${startCase(alignment)}`];
  }

  setPositionAttributeIfChanged(tooltip, 'left', x);
  setPositionAttributeIfChanged(tooltip, 'top', y);

  return { x, y };
}
