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
