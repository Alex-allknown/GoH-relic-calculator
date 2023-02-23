function calculateRelicParts(selectedValues, maxValues) {
  const relicData = {
    R0: { H1: 0, H2: 0, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 0, C2: 0, C3: 0},
    R1: { H1: 40, H2: 0, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 0, C2: 0, C3: 0},
    R2: { H1: 70, H2: 40, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 15, C2: 0, C3: 0},
    R3: { H1: 100, H2: 80, H3: 20, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 35, C2: 15, C3: 0},
    R4: { H1: 130, H2: 120, H3: 60, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 55, C2: 40, C3: 0},
    R5: { H1: 160, H2: 160, H3: 90, H4: 20, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, C1: 75, C2: 65, C3: 15 },
    R6: { H1: 180, H2: 190, H3: 120, H4: 40, H5: 20, H6: 0, H7: 0, H8: 0, H9: 0, C1: 95, C2: 90, C3: 40 },
    R7: { H1: 200, H2: 220, H3: 140, H4: 60, H5: 40, H6: 10, H7: 0, H8: 0, H9: 0, C1: 115, C2: 115, C3: 75 },
    R8: { H1: 200, H2: 220, H3: 160, H4: 80, H5: 60, H6: 30, H7: 20, H8: 0, H9: 0, C1: 135, C2: 140, C3: 120 },
    R9: { H1: 200, H2: 220, H3: 180, H4: 100, H5: 80, H6: 50, H7: 40, H8: 20, H9: 20, C1: 165, C2: 170, C3: 175 }
  };

  const selectedRelic = `R${selectedValues}`;
  const maxRelic = `R${maxValues}`;
  const selectedRelicData = relicData[selectedRelic];
  const maxRelicData = relicData[maxRelic];
  const relicParts = {};

  for (const material in maxRelicData) {
    relicParts[material] = maxRelicData[material] - selectedRelicData[material];
  }
console.log(relicParts)
return 
}
