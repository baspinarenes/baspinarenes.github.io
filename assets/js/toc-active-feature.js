let mainNavLinks = document.querySelectorAll("#table-of-contents ul li a");
let mainSections = document.querySelectorAll("main h2, h3, h4, h5");

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
                
        let selectedSection, selectedSectionNext;
        for (i = 0; i < mainSections.length; i++) {
            if ("#" + mainSections[i].id == link.getAttribute("href")){
                if(i != mainSections.length - 1 ){
                    selectedSection = mainSections[i];
                    selectedSectionNext = mainSections[i+1];
                } else {
                    selectedSection = mainSections[i];
                    selectedSectionNext = null;
                }
            }
        }

        if(selectedSectionNext != null){
            if (selectedSection.offsetTop - 190 <= fromTop && 
                selectedSectionNext.offsetTop - 190 > fromTop) {
                link.classList.add("active");

            } else {
                link.classList.remove("active");
            }
        }
        else {
            
            if (selectedSection.offsetTop - 290 <= fromTop) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
});