<script>
    // const lbl_search = document.querySelectorAll(" .city_categories .filter-option-inner-inner");
    // lbl_search[0].innerHTML = "کشور و شهر";
    // window.addEventListener("load", function() {
    //     const lbl_search = document.querySelectorAll(".city_categories .filter-option-inner-inner");
    //     // const lbl_inner_search = document.querySelectorAll(".main-search-form li.selected .selected span.text");
    //     lbl_search[0].innerHTML = "کشور و شهر";
    //     // lbl_inner_search[0].innerHTML = "کشور و شهر";
    //     // x = document.querySelectorAll(".city_categories .filter-option-inner-inner")[0].innerHTML;
    //     console.log(lbl_search);

    // });
    window.onload = replace_city_lbl;

    function change_name() {

        const lbl_search = document.querySelectorAll("#city_categories option");
        lbl_search[0].innerHTML = "کشور و شهر";
        // const lbl_search = document.querySelectorAll(".city_categories .filter-option-inner-inner");
        // lbl_search[0].innerHTML = "کشور و شهر";
        // console.log(lbl_search[]);
    }

    function replace_city_lbl() {
        try {
            const search_form = document.querySelectorAll(".woocommerce-product-search");
            let tmp_text = search_form[0].outerHTML;

            if (search_form[0].outerHTML.search("شهر / محله")) {
                search_form[0].outerHTML.replace("شهر / محله", "کشور / شهر");
            }
            // search_form[0].outerHTML = tmp_text;
        } catch (err) {
            console.log(err.message + " - " + err.name);
        }
    }
    setTimeout(replace_city_lbl, 3000);
</script>