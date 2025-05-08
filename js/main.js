// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Page transition effect
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Create a smooth transition effect
                    targetSection.style.opacity = '0';
                    targetSection.style.transform = 'translateY(20px)';
                    targetSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    
                    // Scroll to the section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Fade in the section
                    setTimeout(() => {
                        targetSection.style.opacity = '1';
                        targetSection.style.transform = 'translateY(0)';
                    }, 100);
                }
            } else {
                // For external links, add transition effect
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // Fade out current page
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.5s ease';
                
                // Navigate after fade out
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });

    // Initial page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .skill-category, .contact-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial animation state
    document.querySelectorAll('.project-card, .skill-category, .contact-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // PC Build Modal Functionality
    const modal = document.getElementById('buildModal');
    const modalImg = document.getElementById('buildImage');
    const viewButtons = document.querySelectorAll('.view-pc-btn');
    const partsList = document.querySelector('.parts-list');
    const buildTitle = document.querySelector('.build-title');
    const closeModalBtn = document.querySelector('.close-modal');

    // Build specifications
    const buildSpecs = {
        'images/personalpc.jpg': {
            title: 'Personal Workstation',
            parts: [
                {
                    name: 'CPU',
                    specs: 'AMD Ryzen 7 5800XT',
                    link: 'https://www.bestbuy.com/site/amd-ryzen-7-5800xt-8-core-16-thread-3-8-ghz-4-8-ghz-max-boost-socket-am4-unlocked-desktop-processor-silver/6589129.p?skuId=6589129'
                },
                {
                    name: 'GPU',
                    specs: 'Aourus NVIDIA GeForce RTX 3060 Ti',
                    link: 'https://www.amazon.com/GIGABYTE-REV2-0-Graphics-WINDFORCE-GV-N306TAORUS/dp/B09C43DLXG'
                },
                {
                    name: 'RAM',
                    specs: 'Team Group T-Force Vulcan 4x8 32GB DDR4 3200MHz',
                    link: 'https://www.amazon.com/TEAMGROUP-T-Force-Vulcan-3200MHz-Desktop/dp/B07T637L7T/ref=sr_1_1?crid=1T0MGXLMW1C3F&dib=eyJ2IjoiMSJ9.jTztC_m2epiMGTTv5yKdR-x9c1YvNcoDCfLdqPt68LJiFGioUGMXgxojwnqCu66XYtIFh-I3zVZiY54uampGxa5McneTBrNcfdDp2Vct-bgm4OIcJ4QlGsffdY--DXNKoCJNUfFB-2TEwP_rO_UMBWknsLhwKLlIVFcds4s2Eh_bcm_24cphvCiTT7-5G_0lGw3JHJzf3tdiBKOP3zytIyM15ILtaBZaq_vqXGL-xP1AW3nhRf5wVCO1afFsxtkvcCRS7vhOtebAYFMuTdPUeYTs75k__h0VKlXQauNxiZ8.7OrBezK0vCO3TGLWIRxuYepG_7XEWYXbnxdH78GZ7BY&dib_tag=se&keywords=team%2Bgroup%2Bddr4&qid=1745288487&s=electronics&sprefix=team%2Bgroup%2Celectronics%2C288&sr=1-1&th=1'
                },
                {
                    name: 'Storage',
                    specs: '1TB 2.5" Team Group T-Force SSD + WDBLUE 1TB HDD',
                    link: 'https://www.amazon.com/TEAMGROUP-T-Force-Vulcan-Internal-T253TZ001T0C101/dp/B09WMP5B5N/ref=sr_1_3?crid=3Q6PLPIXWAOAL&dib=eyJ2IjoiMSJ9.s0IktfFf-YkR5EuwnNOusaowiU_7jk4deI8-3QMFVq13xOA2cHVpF-5Lcf78atNw1v-SNw2pA3UZ0EbPKQzPBU_AHCRPR-1seX0YjC_JaTB7191_oJrE1jL5KXZVVXcUp28GpLjiae3-EUGW8DNefKhwid69IL0IPH7F_8P5VSX9znH2Pn31AOtQdHH7XRVw8WD3VvP5t7FuzsCowDqip-CJU19DTPPIQRLqQQcwhkaIUedayCJX6PqBa0G1UO8656aoEQmCdA9hPcnx6oHaHitG-zHzjJ5ew2BLEReCFOg.0Dz2mwFa0sZf4vcevhUgLNwelSdEVVlSeCi_9gLCzPI&dib_tag=se&keywords=team+group+ssd&qid=1745288522&s=electronics&sprefix=team+group+ssd%2Celectronics%2C289&sr=1-3 & https://www.amazon.com/WD-Notebook-Internal-5400RPM-WD10JPVX/dp/B01EMXO3DK/ref=sr_1_6?crid=3BJU3GLI52PCS&dib=eyJ2IjoiMSJ9.z-30Gmf-ratRvfyZpyILNqDaOiz6u1WWltzUNgi9YV1Z-QN7JfMHeuTwxieuawbunnQqp2cqDf504OUeNSdlEz9LNtl-awRIQHumEyWdPXe18ntZJNYl8SvPZ9oXMsKHiYF11Rkpb_f6v9ckELKz1optfIke89bsiO4XY_-1Xj5eNUqCMSFP72dY5o4bgtDc-hip5ecS5uz3U5KH2oI5hpezXc7hd05AQ8M3rxnqrwpXiyrooqoHTbIpBaqkwgxql2fZvGQ09Pu4TK_0m9tsC10dSzbYedizYVxZU8W9UMA.hIqLcXCMvWTGHV6iG5BvtClQC5kBmgy-nSsJEeHkm4w&dib_tag=se&keywords=wd+blue+hard+drive+1tb&qid=1745288555&s=electronics&sprefix=wd+blue+hard+drive+1tb%2Celectronics%2C83&sr=1-6'
                },
                {
                    name: 'Motherboard',
                    specs: 'Asrock B550M Phantom 4 Gaming',
                    link: 'https://www.amazon.com/ASRock-B550-Supports-Processors-Motherboard/dp/B089VTZ83Q/ref=sr_1_1?crid=PTZOX0BB83FC&dib=eyJ2IjoiMSJ9.bUfqMzVWK34U_Ldyf76s-Mp82uI6-WJMWbrQua8-kEjU3rgoXd4uJ1tJnoXk2pFb05yySOAmoQyi3ltirpoilZ-1Cxeiquj-1eksWmHXY5iMGxAYPhgyHF0yqZ2cRuoCK7Vu5G30_KCrTkomwWiBg1NHrl5FVBK7urpezn6aljPqxanrevZuIcYuWxEsoSK2GMmUKEJNqwp0XP1ndHBpF_VAxtKYU6spTK1VgNjIfKmMzaMUI-6GS0XuDAVq9pznyTyjJh7oM1gsApnwv21oyWjzqouotI7C3dZYsQFLo5Q.7AkG2cebmLL-JEmV2yrwXKfGKxzLJVEuDo1e4STZs7E&dib_tag=se&keywords=asrock+b550+phantom+gaming+4&qid=1745288581&s=electronics&sprefix=asrock+b550+phantom+gaming+4%2Celectronics%2C123&sr=1-1'
                },
                {
                    name: 'Cooling',
                    specs: 'Ryzen Wraith Spire Stealth',
                    link: 'https://www.amazon.com/AMD-Wraith-Prism-RGB-Controlled-Illumination/dp/B09JZM682W/ref=sr_1_2?crid=192ZNPJG8EUIC&dib=eyJ2IjoiMSJ9.QgRqtEsFrha_flK1mg9XZ_dIf9kqtxR5beyKGey7RroDcQ86-aFN4YarGN4-qdnpL_WZY_Bv5Wj6XiEn5I5PobYaWnUXHNHwsx4-Tw9SeQIyBtjbVn_aV7RxKy9IAmalP4etncF_EROOWmAwcGENdq1Uew2cd0IM59MOB2bhj-jVIVT4xlBtrdYXKaFgv_aPb3icf2YPWhfx7kQfVCqM7m9uulc8a-aMgjFRwVrk4Rv6tLsmgTnskCqQ4NMUVQlsapgFwvohdVPX9mYdB51CEVuVkuAG-_N3--gpwIpmc34.1mnEsYB1hnNiJlufuRa4zZQQL_442X5RWCBLnIKmcwk&dib_tag=se&keywords=amd+wraith+cooler&qid=1745288611&s=electronics&sprefix=amd+wraith%2Celectronics%2C177&sr=1-2&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666'
                },
                {
                    name: 'Case',
                    specs: 'Montech XR',
                    link: 'https://www.amazon.com/Mid-Tower-Pre-Installed-Full-View-Wood-Grain-Interface/dp/B0D5PHHCK5/ref=sr_1_1?crid=NW8IGAMLI1IG&dib=eyJ2IjoiMSJ9.rwAX5efFy7IcINTzakQxRsC7kdfGmwznZWrBs787V_8jCzRQ_YyMrb9HZXLdCehZLHjArWGGuj7E-0tOPeXlHXyAg2UhQTLvnFoAdO8q5m7vQkvo6InuRuQmm-WpYnrTgInOCyfKG2WVaPFMTIH0LIgBbALuPgJu-n9ioTKpNESJ6_GXwB3VMBmOH2mTXcVKaYd0a2joqYooYN6YKFB79j_9-h_cGUWTnY8nu9rR1pcdYotbWNvucVqAP9ska2vCjADhKfzIOq9BYbH5LD5AKXwR5cpSXwrF05yPrFs5_Sc.HD-mKTUirPAZSP00nKgIhgyrUbg1gNgbp1Iis5zAdXo&dib_tag=se&keywords=Montech+xr&qid=1745288596&s=electronics&sprefix=mon%2Celectronics%2C832&sr=1-1'
                },
                {
                    name: 'Power Supply',
                    specs: 'Evga 80+ Gold 700W',
                    link: 'https://www.amazon.com/EVGA-100-BR-0700-K1-Bronze-Power-Supply/dp/B07DTP6MWS/ref=sr_1_1?crid=2RFRQ6A1DKE00&dib=eyJ2IjoiMSJ9.q6lkglL8NB60tX-Hm3WJy8ed3Y9HJ-3KHR2G3EE54C9pxUDCv634QOStrds5aUwrdwt7F7Fl0UviCKtkWaRVJmYdgmDMG1BTSzPSblZIRDM6FPJ7xEAuu8YVno8QillgNXQVELGBOFdXIXYeTb6ezNYpcDmy5kIrsOdm9eS6Y_r2drPsWG4Cdc9ddKazthMsPbISrutLGRQ21xFYKZnGupN5EMgSJHQY_EQ-VwVkCVzB3sjyemFuIemXwT3Rpr_McyUlr69h5L-16EncC3U1MyMV2_2mTppfK46DkWKHYKA.wdCEGHYk4VVZJ-pgBAhmzqScXvTUZqg0sf4EAcKO8c8&dib_tag=se&keywords=evga+700w+power+supply&qid=1745288633&s=electronics&sprefix=evga+700%2Celectronics%2C143&sr=1-1&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666'
                }
            ]
        },
        'images/mikespc.jpg': {
            title: 'Custom Build for Friend',
            parts: [
                {
                    name: 'CPU',
                    specs: 'Intel Core i5-10600K',
                    link: 'https://www.amazon.com/Intel-i5-10600K-Desktop-Processor-Unlocked/dp/B086MHSH2C'
                },
                {
                    name: 'GPU',
                    specs: 'ASUS Low Profile NVIDIA GeForce RTX 2060',
                    link: 'https://www.ebay.com/sch/i.html?_nkw=asus+single+fan+2060&_sacat=0&_from=R40&_trksid=p3671980.m570.l1313'
                },
                {
                    name: 'RAM',
                    specs: 'Corsair Vengeance LPX 16GB DDR4 3200MHz',
                    link: 'https://www.bestbuy.com/site/corsair-vengeance-lpx-16gb-2x8gb-ddr4-3600mhz-c18-udimm-desktop-memory-black/6412826.p?skuId=6412826&extStoreId=1197&utm_source=feed&ref=212&loc=19589565301&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw2ZfABhDBARIsAHFTxGw92FvSghJXHR8nYwQGJnC2HeKatqo1jq4dJyFT6SPQoQ9hM-iccg0aArTrEALw_wcB'
                },
                {
                    name: 'Storage',
                    specs: '1TB NVMe SSD + 1TB HDD',
                    link: 'https://www.amazon.com/TEAMGROUP-T-Force-Vulcan-Internal-T253TZ001T0C101/dp/B09WMP5B5N/ref=sr_1_3?crid=3Q6PLPIXWAOAL&dib=eyJ2IjoiMSJ9.s0IktfFf-YkR5EuwnNOusaowiU_7jk4deI8-3QMFVq13xOA2cHVpF-5Lcf78atNw1v-SNw2pA3UZ0EbPKQzPBU_AHCRPR-1seX0YjC_JaTB7191_oJrE1jL5KXZVVXcUp28GpLjiae3-EUGW8DNefKhwid69IL0IPH7F_8P5VSX9znH2Pn31AOtQdHH7XRVw8WD3VvP5t7FuzsCowDqip-CJU19DTPPIQRLqQQcwhkaIUedayCJX6PqBa0G1UO8656aoEQmCdA9hPcnx6oHaHitG-zHzjJ5ew2BLEReCFOg.0Dz2mwFa0sZf4vcevhUgLNwelSdEVVlSeCi_9gLCzPI&dib_tag=se&keywords=team+group+ssd&qid=1745288522&s=electronics&sprefix=team+group+ssd%2Celectronics%2C289&sr=1-3 & https://www.amazon.com/WD-Notebook-Internal-5400RPM-WD10JPVX/dp/B01EMXO3DK/ref=sr_1_6?crid=3BJU3GLI52PCS&dib=eyJ2IjoiMSJ9.z-30Gmf-ratRvfyZpyILNqDaOiz6u1WWltzUNgi9YV1Z-QN7JfMHeuTwxieuawbunnQqp2cqDf504OUeNSdlEz9LNtl-awRIQHumEyWdPXe18ntZJNYl8SvPZ9oXMsKHiYF11Rkpb_f6v9ckELKz1optfIke89bsiO4XY_-1Xj5eNUqCMSFP72dY5o4bgtDc-hip5ecS5uz3U5KH2oI5hpezXc7hd05AQ8M3rxnqrwpXiyrooqoHTbIpBaqkwgxql2fZvGQ09Pu4TK_0m9tsC10dSzbYedizYVxZU8W9UMA.hIqLcXCMvWTGHV6iG5BvtClQC5kBmgy-nSsJEeHkm4w&dib_tag=se&keywords=wd+blue+hard+drive+1tb&qid=1745288555&s=electronics&sprefix=wd+blue+hard+drive+1tb%2Celectronics%2C83&sr=1-6'
                },
                {
                    name: 'Motherboard',
                    specs: 'ASRock Z490 Pro4',
                    link: 'https://www.amazon.com/ASRock-Z490-PRO4-Processors-Motherboard/dp/B087TD675B'
                },
                {
                    name: 'Cooling',
                    specs: 'CoolerMaster MasterLiquid ML240L RGB',
                    link: 'https://www.amazon.com/CoolerMaster-MasterLiquid-Close-Loop-Cooler-SickleFlow/dp/B086BYYFG5/ref=sr_1_1?crid=4BVGOZQOD5MX&dib=eyJ2IjoiMSJ9.xWuiH84gNYk1DahjA1Dqv04Y73VWzZIt6W9WLiBn2Zv9y0eFY_rB6GKB6nAQzN5qtQUC5TR6hmTeJmMoez-8Rm2085AOg40ahnvbwVvQLvv89hPlj6dniwlB2CMK2Dks1OR5qd9RGs6y2y7Ks5b8lEX_8Rs9pAyuIc02qVAiXIwtpgIIlyUp6YCeuYfZSXOh_fhKzihPMMjJMTW2AS7RkUc-woIRLEzanazn6jRGlFNVnV1L_BLdCgyHRBWSP2SonbgZrCLglcESwreAofuAof0QhB4gtZZVKKa9tH-6S68.AJQtPUY79MUAwRHlSAiysq1ClOlB4LJ4ykMZKax0338&dib_tag=se&keywords=CoolerMaster+MasterLiquid+ML240L+RGB&qid=1745288880&s=electronics&sprefix=cooler+master+masterliquid+ml240l+rgb%2Celectronics%2C252&sr=1-1'
                },
                {
                    name: 'Case',
                    specs: 'ATX Case',
                    link: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjf8PT3y-qMAxWZRP8BHYWfCvEYABAHGgJtZA&co=1&gclid=Cj0KCQjw2ZfABhDBARIsAHFTxGwW31gOY2bnJ5mUgB5yb71oqxmAhwji0whtuGP0pL4O7K_qhQUFNSsaAnvDEALw_wcB&ohost=www.google.com&cid=CAESV-D2XkgMVfeDzeruDUm-WPGa6UG1hzBB4bmxV54_WHK6S2wd8K6nxx4jos35Cvf7_PJNrHIqyEi1120avOpcpPIq3ehQtIRLdlG3eL9ON9mvHrmyFr-lZA&sig=AOD64_1XUW5ZKf033erYrlJlDh4-8JXfIw&ctype=5&q=&ved=2ahUKEwiAtO_3y-qMAxX7rYkEHVW_CpMQ9aACKAB6BAgFECo&adurl='
                },
                {
                    name: 'Power Supply',
                    specs: 'EVGA 80+ Gold 750W',
                    link: 'https://www.google.com/search?client=opera-gx&q=evga+750+w+gold+powersuppli&sourceid=opera&ie=UTF-8&oe=UTF-8#oshopproduct=gid:8082638237701924797,mid:576462248469204261,oid:979582961067417899,iid:7481590902781232799,rds:UENfODA4MjYzODIzNzcwMTkyNDc5N3xQUk9EX1BDXzgwODI2MzgyMzc3MDE5MjQ3OTc%3D,pvt:hg,pvo:3&oshop=apv&pvs=0'
                }
            ]
        }
    };

    // Function to populate parts list
// Function to populate parts list
function populatePartsList(imageSrc) {
    // Remove the leading '../' from imageSrc to match the keys in buildSpecs
    const keyForBuildSpecs = imageSrc.startsWith('../') ? imageSrc.substring(3) : imageSrc;

    const build = buildSpecs[keyForBuildSpecs]; // Use the modified key

    if (!build) {
        console.error('Build specs not found for key:', keyForBuildSpecs, '(original imageSrc:', imageSrc + ')');
        // Optionally, display a message in the modal if data isn't found
        partsList.innerHTML = '<p>Sorry, build details are currently unavailable.</p>';
        buildTitle.textContent = 'Details Not Found';
        return;
    }

    buildTitle.textContent = build.title;
    partsList.innerHTML = ''; // Clears previous parts

    build.parts.forEach(part => {
        const partItem = document.createElement('div');
        partItem.className = 'part-item';
        partItem.innerHTML = `
            <div class="part-name">${part.name}</div>
            <div class="part-specs">${part.specs}</div>
            <a href="${part.link}" target="_blank" rel="noopener noreferrer" class="view-part-btn">View</a>
        `;
        partsList.appendChild(partItem);
    });
}
    // Function to open modal
    function openModal(imageSrc) {
        modal.style.display = 'flex';
        modalImg.src = imageSrc;
        populatePartsList(imageSrc);
        document.body.style.overflow = 'hidden';
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Add click event to all view buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const imageSrc = this.getAttribute('data-image');
            if (imageSrc) {
                openModal(imageSrc);
            }
        });
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal when clicking the close button
    closeModalBtn.addEventListener('click', closeModal);

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // Add project card hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 15px 30px rgba(139, 0, 139, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(139, 0, 139, 0.2)';
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            // Add loading animation
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            try {
                const formData = new FormData(contactForm);
                
                const response = await fetch('php/contact.php', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Show success message
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitBtn.style.backgroundColor = '#4CAF50';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.style.backgroundColor = 'var(--primary-color)';
                        submitBtn.disabled = false;
                    }, 2000);
                } else {
                    // Show error message
                    submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error!';
                    submitBtn.style.backgroundColor = '#f44336';
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.style.backgroundColor = 'var(--primary-color)';
                        submitBtn.disabled = false;
                    }, 2000);
                    
                    // Show error message to user
                    alert(result.message || 'Failed to send message. Please try again later.');
                }
            } catch (error) {
                console.error('Error:', error);
                submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error!';
                submitBtn.style.backgroundColor = '#f44336';
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.style.backgroundColor = 'var(--primary-color)';
                    submitBtn.disabled = false;
                }, 2000);
                
                alert('An error occurred. Please try again later.');
            }
        });
    }
});

// Add typing effect to hero section
const heroText = document.querySelector('.pirate-bio');
const text = heroText.textContent;
heroText.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
};

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Add skill tag hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});

// Luffy's arm stretch animation for page transitions
function createStretchAnimation() {
    const stretchArm = document.createElement('div');
    stretchArm.className = 'stretch-arm';
    document.body.appendChild(stretchArm);
    
    // Add the arm to the page
    stretchArm.style.position = 'fixed';
    stretchArm.style.top = '0';
    stretchArm.style.left = '0';
    stretchArm.style.width = '100%';
    stretchArm.style.height = '100%';
    stretchArm.style.background = 'var(--primary-color)';
    stretchArm.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    stretchArm.style.zIndex = '9999';
    
    // Animate the arm
    stretchArm.style.animation = 'stretch 1s ease-in-out forwards';
    
    // Remove the arm after animation
    setTimeout(() => {
        stretchArm.remove();
    }, 1000);
}

// Add the stretch animation to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        createStretchAnimation();
        
        // Navigate after animation
        setTimeout(() => {
            window.location.href = link.getAttribute('href');
        }, 500);
    });
});

// Add CSS for the stretch animation
const style = document.createElement('style');
style.textContent = `
    @keyframes stretch {
        0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }
        50% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        100% {
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for the wave animation
window.addEventListener('scroll', () => {
    const wave = document.querySelector('.wave-animation');
    const scrolled = window.pageYOffset;
    wave.style.transform = `translateX(${scrolled * 0.5}px)`;
}); 
