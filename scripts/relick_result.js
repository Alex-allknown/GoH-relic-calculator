function relick_results(sumObject){
  const resultContainer = document.getElementById("relic-parts");

  // Очищаем контейнер перед каждым обновлением результатов
  resultContainer.innerHTML = "";
  // Проходимся по всем деталям реликвии
  for (const material in sumObject) {
    // Создаем элементы для изображения и количества деталей
    const materialContainer = document.createElement("div");
    const materialImages = {
      H1: '',
      H2: '',
      H3: '',
      H4: '',
      H5: '',
      H6: '',
      H7: '',
      H8: '',
      H9: '',
      C1: '',
      C2: '',
      C3: '',
    };
    
    const materialImage = document.createElement("img");
    const materialCount = document.createElement("p");

    // Устанавливаем атрибуты изображения
    materialImage.src = materialImages[material];
    materialImage.alt = material;

    // Устанавливаем текст для количества деталей
    materialCount.textContent = `${sumObject[material]} pieces`;

    // Добавляем изображение и количество деталей в контейнер
    materialContainer.appendChild(materialImage);
    materialContainer.appendChild(materialCount);
    resultContainer.appendChild(materialContainer);
  }
}
