function showToast(message, duration=4000){
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div'); toast.className='toast';
  toast.innerHTML=`<span>${message}</span><span class="closeBtn">&times;</span>`;
  container.appendChild(toast);
  setTimeout(()=>toast.classList.add('show'),50);
  const hideTimeout = setTimeout(()=>{ toast.classList.remove('show'); setTimeout(()=>container.removeChild(toast),500); }, duration);
  toast.querySelector('.closeBtn').addEventListener('click', ()=>{ clearTimeout(hideTimeout); toast.classList.remove('show'); setTimeout(()=>container.removeChild(toast),500); });
}

const valueTable = {
  "Cold Attack|NQ": 0.10, "Cold Attack|GQ": 0.20, "Cold Attack|HQ": 0.30, "Cold Attack|EQ": 0.40,
  "Electric Attack|NQ": 0.75, "Electric Attack|GQ": 1.50, "Electric Attack|HQ": 2.25, "Electric Attack|EQ": 3.00,
  "Fire Attack|NQ": 1.00, "Fire Attack|GQ": 3.00, "Fire Attack|HQ": 4.00, "Fire Attack|EQ": 5.00,
  "Toxic Attack|NQ": 0.75, "Toxic Attack|GQ": 1.50, "Toxic Attack|HQ": 2.25, "Toxic Attack|EQ": 3.00,
  "Cold Passive|NQ": 0.10, "Cold Passive|GQ": 0.20, "Cold Passive|HQ": 0.30, "Cold Passive|EQ": 0.40,
  "Electric Passive|NQ": 0.75, "Electric Passive|GQ": 1.50, "Electric Passive|HQ": 2.25, "Electric Passive|EQ": 3.00,
  "Fire Passive|NQ": 0.25, "Fire Passive|GQ": 0.50, "Fire Passive|HQ": 0.75, "Fire Passive|EQ": 1.00,
  "Toxic Passive|NQ": 0.20, "Toxic Passive|GQ": 0.40, "Toxic Passive|HQ": 0.60, "Toxic Passive|EQ": 0.80,
  "Physical Damage|NQ": 0.15, "Physical Damage|GQ": 0.30, "Physical Damage|HQ": 0.45, "Physical Damage|EQ": 0.60,
  "Damage|NQ": 0.10, "Damage|GQ": 0.20, "Damage|HQ": 0.30, "Damage|EQ": 0.40,
  "Critical Damage|NQ": 0.25, "Critical Damage|GQ": 0.50, "Critical Damage|HQ": 0.75, "Critical Damage|EQ": 1.00,
  "Critical Chance|NQ": 0.20, "Critical Chance|GQ": 0.40, "Critical Chance|HQ": 0.60, "Critical Chance|EQ": 0.80,
  "Combo Damage|NQ": 0.10, "Combo Damage|GQ": 0.20, "Combo Damage|HQ": 0.30, "Combo Damage|EQ": 0.40,
  "Bonus Damage on Stunned Targets|NQ": 0.15, "Bonus Damage on Stunned Targets|GQ": 0.30, "Bonus Damage on Stunned Targets|HQ": 0.45, "Bonus Damage on Stunned Targets|EQ": 0.60,
  "Bonus Damage on Slowed Targets|NQ": 0.10, "Bonus Damage on Slowed Targets|GQ": 0.20, "Bonus Damage on Slowed Targets|HQ": 0.30, "Bonus Damage on Slowed Targets|EQ": 0.40,
  "Blind|NQ": 0.25, "Blind|GQ": 0.50, "Blind|HQ": 0.75, "Blind|EQ": 1.00,
  "Heal|NQ": 0.15, "Heal|GQ": 0.30, "Heal|HQ": 0.45, "Heal|EQ": 0.60,
  "Move Speed|NQ": 0.10, "Move Speed|GQ": 0.20, "Move Speed|HQ": 0.30, "Move Speed|EQ": 0.40,
  "Projection +|NQ": 0.05, "Projection +|GQ": 0.10, "Projection +|HQ": 0.15, "Projection +|EQ": 0.20,
  "Projection -|NQ": 0.05, "Projection -|GQ": 0.10, "Projection -|HQ": 0.15, "Projection -|EQ": 0.20,
  "Root|NQ": 0.10, "Root|GQ": 0.20, "Root|HQ": 0.30, "Root|EQ": 0.40,
  "Stun|NQ": 0.25, "Stun|GQ": 0.50, "Stun|HQ": 0.75, "Stun|EQ": 1.00,
  "Vampiric|NQ": 0.25, "Vampiric|GQ": 0.50, "Vampiric|HQ": 0.75, "Vampiric|EQ": 1.00,
  "Healing Skill|NQ": 0.15, "Healing Skill|GQ": 0.30, "Healing Skill|HQ": 0.45, "Healing Skill|EQ": 0.60,
  "Stamina Gain|NQ": 0.25, "Stamina Gain|GQ": 0.50, "Stamina Gain|HQ": 0.75, "Stamina Gain|EQ": 1.00,
  "Counter Attack|NQ": 0.20, "Counter Attack|GQ": 0.40, "Counter Attack|HQ": 0.60, "Counter Attack|EQ": 0.80,
  "Shield|NQ": 1.00,  "Shield|GQ": 2.00,  "Shield|HQ": 3.00,  "Shield|EQ": 4.00,
  "Resistance|NQ": 0.10, "Resistance|GQ": 0.20, "Resistance|HQ": 0.30, "Resistance|EQ": 0.40,
  "Physical Resistance|NQ": 0.15, "Physical Resistance|GQ": 0.30, "Physical Resistance|HQ": 0.45, "Physical Resistance|EQ": 0.60,
  "Electric Resistance|NQ": 0.10, "Electric Resistance|GQ": 0.20, "Electric Resistance|HQ": 0.30, "Electric Resistance|EQ": 0.40,
  "Fire Resistance|NQ": 0.15, "Fire Resistance|GQ": 0.30, "Fire Resistance|HQ": 0.45, "Fire Resistance|EQ": 0.60,
  "Cold Resistance|NQ": 0.05, "Cold Resistance|GQ": 0.10, "Cold Resistance|HQ": 0.15, "Cold Resistance|EQ": 0.20,
  "Toxic Resistance|NQ": 0.15, "Toxic Resistance|GQ": 0.30, "Toxic Resistance|HQ": 0.45, "Toxic Resistance|EQ": 0.60,
  "Resilience|NQ": 0.25, "Resilience|GQ": 0.50, "Resilience|HQ": 0.75, "Resilience|EQ": 1.00,
  "Regeneration|NQ": 0.50, "Regeneration|GQ": 0.75, "Regeneration|HQ": 1.00, "Regeneration|EQ": 1.25,
  "Aggro Bonus|NQ": 0.05, "Aggro Bonus|GQ": 0.10, "Aggro Bonus|HQ": 0.15, "Aggro Bonus|EQ": 0.20,
  "Dodge|NQ": 0.25, "Dodge|GQ": 0.50, "Dodge|HQ": 0.75, "Dodge|EQ": 1.00,
  "Max Health|NQ": 0.15, "Max Health|GQ": 0.30, "Max Health|HQ": 0.45, "Max Health|EQ": 0.60,
  "Bonus Received Heal|NQ": 0.10, "Bonus Received Heal|GQ": 0.20, "Bonus Received Heal|HQ": 0.30, "Bonus Received Heal|EQ": 0.40,
};


const dyeValues = {
  "White-EBEBEB": 0.25,
  "Cream-Beige-FFD7C1": 0.1,
  "Cream-Beige-FED7C2": 0.1,
  "Pink-F886E7": 0.25,
  "Cyan-Turquoise-13A4B7": 0.25,
  "Atlantic-Dark-Teal-1F6074": 0.25,
  "Sapphire-Blue-304B9C": 0.25,
  "Violet-Purple-7841A2": 0.25,
  "Violet-Purple-8B4BBC": 0.25,
  "Dark-Fuchsia-7D3973": 0.25,
  "Dark-Fuchsia-914285": 0.25,
  "Maroon-A2132D": 0.1,
  "Carmine-Cherry-Red-D63343": 0.1,
  "Vermilion-Carrot-Red-F25A28": 0.1,
  "Light-Orange-E88133": 0.1,
  "Dark-Yellow-F6C549": 0.1,
  "Dark-Yellow-F5C455": 0.1,
  "Lemon-Yellow-D1DF3B": 0.1,
  "Lemon-Yellow-D1DD4B": 0.1,
  "Spring-Green-2CBE69": 0.25,
  "Green-4CA241": 0.1,
  "Green-4FA146": 0.1,
  "Dark-Green-62773E": 0.1,
  "Dark-Green-5B6E3D": 0.1,
  "Dark-Green-5E733D": 0.1,
  "Olive-A2A013": 0.1,
  "Light-Brown-A27B13": 0.1,
  "Brown-81583E": 0.25,
  "Earth-Reddish-Brown-823733": 0.05,
  "Earth-Reddish-Brown-7A3633": 0.05,
  "Claret-Pinkish-Brown-87465B": 0.05,
  "Claret-Pinkish-Brown-9D5169": 0.05,
  "Black-303030": 0.25,
  "Gray-70755E": 1.0
};

function lookupValue(kit, quality) {
  if (dyeValues.hasOwnProperty(kit)) {
    console.log("Dye found:", kit, "Value:", dyeValues[kit]);
    return dyeValues[kit];
  }
  const key = `${kit}|${quality}`;
  if (valueTable.hasOwnProperty(key)) {
    console.log("Kit found:", key, "Value:", valueTable[key]);
    return valueTable[key];
  }
  console.warn("Value not found for kit:", kit, "quality:", quality);
  return 0;
}

function createQualityDropdown(){
  const sel = document.createElement('select');
  ["NQ","GQ","HQ","EQ"].forEach(q => {
    const o = document.createElement('option'); 
    o.value = o.text = q; 
    sel.add(o);
  });
  sel.className = 'qualitySelect';
  return sel;
}

function addKitRow(containerId){
  const container = document.getElementById(containerId);
  if(container.querySelectorAll('.kitRow').length >= 7){
    showToast("Max slots reached!");
    return; 
  }  
  const row = document.createElement('div'); 
  row.className='kitRow';
  const kitSel = document.createElement('select');
  kitSel.className = 'kitSelect';
  const Categories = {
  "Battle Kits": [
    "Cold Attack",
    "Electric Attack",
    "Fire Attack",
    "Toxic Attack",
    "Cold Passive",
    "Electric Passive",
    "Fire Passive",
    "Toxic Passive",
    "Physical Damage",
    "Damage",
    "Critical Damage",
    "Critical Chance",
    "Combo Damage",
    "Bonus Damage on Stunned Targets",
    "Bonus Damage on Slowed Targets"
  ],
  "Support Kits": [
    "Blind",
    "Heal",
    "Move Speed",
    "Projection +",
    "Projection -",
    "Root",
    "Stun",
    "Vampiric",
    "Healing Skill",
    "Stamina Gain"
  ],
  "Protection Kits": [
    "Counter Attack",
    "Shield",
    "Resistance",
    "Physical Resistance",
    "Electric Resistance",
    "Fire Resistance",
    "Cold Resistance",
    "Toxic Resistance",
    "Resilience",
    "Regeneration",
    "Aggro Bonus",
    "Dodge",
    "Max Health",
    "Bonus Received Heal"
  ],
	"Dyes": [ "White-EBEBEB", "Cream-Beige-FFD7C1", "Cream-Beige-FED7C2", "Pink-F886E7", "Cyan-Turquoise-13A4B7", "Atlantic-Dark-Teal-1F6074", "Sapphire-Blue-304B9C", "Violet-Purple-7841A2", "Violet-Purple-8B4BBC", "Dark-Fuchsia-7D3973", "Dark-Fuchsia-914285", "Maroon-A2132D", "Carmine-Cherry-Red-D63343", "Vermilion-Carrot-Red-F25A28", "Light-Orange-E88133", "Dark-Yellow-F6C549", "Dark-Yellow-F5C455", "Lemon-Yellow-D1DF3B", "Lemon-Yellow-D1DD4B", "Spring-Green-2CBE69", "Green-4CA241", "Green-4FA146", "Dark-Green-62773E", "Dark-Green-5B6E3D", "Dark-Green-5E733D", "Olive-A2A013", "Light-Brown-A27B13", "Brown-81583E", "Earth-Reddish-Brown-823733", "Earth-Reddish-Brown-7A3633", "Claret-Pinkish-Brown-87465B", "Claret-Pinkish-Brown-9D5169", "Black-303030", "Gray-70755E" ]
  };
  
  for (const [label, options] of Object.entries(Categories)) {
  const group = document.createElement('optgroup');
  group.label = label;
  options.forEach(optionText => {
  const o = document.createElement('option');
  if (label === "Dyes") {
    const parts = optionText.split('-');
    const displayText = parts.slice(0, -1).join(' ') + ' #' + parts[parts.length - 1];
    o.value = optionText;     
    o.text = displayText; 
  } else {
    o.value = o.text = optionText;
  } 
  group.appendChild(o);
  });
  kitSel.appendChild(group);
}

  const qualSel = createQualityDropdown();
  kitSel.addEventListener('change', () => {
  const selectedOption = kitSel.selectedOptions[0];
  const parentGroup = selectedOption?.parentElement?.label || "";
  const isDye = parentGroup === "Dyes";
  if (isDye) {
      qualSel.value = "NQ";
      qualSel.disabled = true;
    } else {
      qualSel.disabled = false;
    }
  });

  const amt = document.createElement('select');
  amt.className = 'amountInput';
  for (let i = 1; i <= 10; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text = i;
  amt.appendChild(option);
}

  const rem = document.createElement('button'); 
  rem.type='button'; 
  rem.textContent='x'; 
  rem.className='smallBtn'; 
  rem.onclick = ()=>row.remove();
  row.append(kitSel, qualSel, amt, rem);
  container.appendChild(row);
  kitSel.dispatchEvent(new Event('change'));
}

function computeValueForRow(row){
  const kit = row.querySelector('.kitSelect').value;
  const quality = row.querySelector('.qualitySelect').value;
  const amount = parseFloat(row.querySelector('.amountInput').value) || 1;
  let baseValue = lookupValue(kit, quality);
  return baseValue * amount;
}

function computeValue(containerId){
  const container = document.getElementById(containerId);
  let total = 0;
  container.querySelectorAll('.kitRow').forEach(row => { 
    total += computeValueForRow(row); 
  });
  return total;
}

function getKitIconName(kitSelect, qualitySelect) {
  if (!kitSelect || !qualitySelect) return null;
  const kit = kitSelect.value.trim();     
  const quality = qualitySelect.value.trim();
  return `${kit} ${quality}.png`;         
}

function displayIcons(containerId, iconContainerId) {
  const container = document.getElementById(containerId);
  const iconContainer = document.getElementById(iconContainerId);
  iconContainer.innerHTML = "";
  const rows = Array.from(container.querySelectorAll('.kitRow'));
  const isLeft = iconContainer.classList.contains('left');
  let iconIndex = 0;
  let maxDelay = 0;

 rows.forEach(row => {
  const kitSel = row.querySelector('.kitSelect');
  const qualitySel = row.querySelector('.qualitySelect');
  const amtInput = row.querySelector('.amountInput');
  const amount = parseInt(amtInput?.value) || 1;
  const kit = kitSel.value;
  const quality = qualitySel.value;
  const isDye = dyeValues.hasOwnProperty(kit);
  const iconFile = isDye ? `${kit}.png` : `${kit} ${quality}.png`;
  const iconSrc = `icons/${iconFile}`;

  for (let j = 0; j < amount; j++) {
    const img = document.createElement('img');
    img.src = iconSrc;
    img.alt = isDye ? kit : `${kit} (${quality})`;
    if (isDye) {
      img.style.background = "transparent";
      img.style.border = "none";
    }
   if (isLeft) iconContainer.prepend(img);
   else iconContainer.appendChild(img);
   const appearDelay = 250 * iconIndex;
   setTimeout(() => img.classList.add('show'), appearDelay);
   iconIndex++;
  }
  
 });

  const children = Array.from(iconContainer.children);
  const fadeOutAnimationTime = 600;
  const baseDisappearDelay = 3500; 
  const orderedChildren = isLeft ? children : children.slice().reverse();

  orderedChildren.forEach((img, i) => {
  const disappearDelay = baseDisappearDelay + 250 * i;
  if (disappearDelay > maxDelay) maxDelay = disappearDelay;
  setTimeout(() => {
      img.classList.remove('show');
      img.classList.add('hide');
    }, disappearDelay);
  });

  return maxDelay + fadeOutAnimationTime;
}

function reviewTrade() {
  const leftDuration = displayIcons('leftRowsContainer', 'leftIcons');
  const rightDuration = displayIcons('rightRowsContainer', 'rightIcons');
  const totalDelay = Math.max(leftDuration, rightDuration);

  setTimeout(() => {
  const leftVal = computeValue('leftRowsContainer');
  const rightVal = computeValue('rightRowsContainer');
  document.getElementById('leftValue').value = leftVal.toFixed(2);
  document.getElementById('rightValue').value = rightVal.toFixed(2);
  
  function getTier(v) {
      if (v >= 0.5) return "high";
      if (v >= 0.2) return "medium";
      return "low";
  }
  
  const leftTier = getTier(leftVal);
  const rightTier = getTier(rightVal);
  const ratio = Math.min(leftVal, rightVal) / Math.max(leftVal, rightVal);
  let verdict = '';
  if (leftVal === 0 || rightVal === 0) {
      verdict = "No kits selected!";
    } else if (leftTier !== rightTier) {
      verdict = (leftVal === rightVal) ? "🟢 Perfect Trade!" : "🔴 Not Recommended.";
    } else {
      verdict = (ratio >= 0.8) ? "🟢 Perfect Trade!" :
                (ratio >= 0.6) ? "🟡 Okay Trade..." :
                "🔴 Not Recommended.";
  }
  showToast(`Trade Tip:<br>${verdict}`, 5000);
  }, totalDelay + 100);
  
}

window.addEventListener('DOMContentLoaded', ()=>{
  addKitRow('leftRowsContainer');
  addKitRow('rightRowsContainer');  
  showToast("Note:<br>⚠️ Values may vary.", 5000);
});