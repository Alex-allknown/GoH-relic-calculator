export function button2Clicked() {
    function createDropdown(selectedImage, options) {
      const container = document.createElement("div");
      container.classList.add("dropdown-container");
  
      const image = document.createElement("img");
      image.src = selectedImage;
      image.classList.add("selected-image");
      container.appendChild(image);
  
      const select = document.createElement("select");
      for (let i of options) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
      }
  
      container.appendChild(select);
      return container;
    }
  
    const selectedImages = [
      { src: "", options: [7, 6, 5, 4, 3, 2, 1, 0] },
      { src: "", options: [5, 4, 3, 2, 1, 0] },
      { src: "", options: [5, 4, 3, 2, 1, 0] },
      { src: "", options: [7, 6, 5, 4, 3, 2, 1, 0] },
      { src: "", options: [5, 4, 3, 2, 1, 0] },
      { src: "", options: [5, 4, 3, 2, 1, 0] },
      { src: "", options: [3, 2, 1, 0] },
      { src: "", options: [5, 4, 3, 2, 1, 0] },
      { src: "", options: [3, 2, 1, 0] },
      { src: "", options: [5, 4, 3, 2, 1, 0] },
      { src: "", options: [3, 2, 1, 0] },
      { src: "", options: [7, 6, 5, 4, 3, 2 , 1, 0] }
    ];
  
    const imagesContainer2 = document.querySelector(".images-container-2");
    for (const selectedImage of selectedImages) {
      const dropdownContainer2 = createDropdown(selectedImage.src, selectedImage.options);
      imagesContainer2.appendChild(dropdownContainer2);
    }
  }
  