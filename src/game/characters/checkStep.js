import CONFIG from '../setting/config'

function checkStep (step) {
  if (step.classList.contains(CONFIG.moveBan.wall) || 
      step.classList.contains(CONFIG.moveBan.box) ||
      step.innerHTML !== '') {
    return true;
  } else {
    return false;
  };
}

export default checkStep;