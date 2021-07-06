<template>
    <div>
        <div>
            <page-title :heading="heading" />
        </div>

        <div>
            <Table
                :productsServices="productsServices"
                :handleRemove="handleRemove"
                :handleForm="handleForm"
            />
        </div>
        <div>
            <ProductServiceForm
                :closeForm="closeForm"
                :dialog="isFormOpen"
                :formLayout="formLayout"
                :editedForm="editedForm"
                :handleRegister="handleRegister"
            />
        </div>
    </div>
</template>

<script>
import Table from "./components/Table.vue";
import ProductServiceForm from "./components/ProductServiceForm.vue";

export default {
    components: {
        Table,
        ProductServiceForm
    },
    data() {
        return {
            heading: "Produits/Services",
            subheading: "Créer les produits ou services.",
            productsServices: [
                {
                    _id: 100,
                    type: "Produit",
                    name: "Boisson",
                    categoryType: "Location bureau partagé",
                    key: "bb1",
                    display: "Admin",
                    priceHT: 242,
                    priceTTC: 290,
                    priceMember: 40,
                    pricePromotion: 200,
                    priceMemberPromotion: 38,
                    variation: "Delta",
                    state: "Actif",
                    descriptionLong:
                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. ",
                    descriptionShort: "Bla bla bla",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. "
                },
                {
                    type: "Service",
                    name: "Repas",
                    categoryType: "Experience",
                    key: "bb1",
                    display: "Admin",
                    priceHT: 242,
                    priceTTC: 290,
                    priceMember: 40,
                    pricePromotion: 200,
                    priceMemberPromotion: 38,
                    variation: "Delta",
                    state: "Désactivé",
                    descriptionLong:
                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. ",
                    descriptionShort: "Bla bla bla",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. "
                }
            ],
            dialog: false,
            isFormOpen: false,
            formMode: "",
            editedForm: {},
            formLayout: {}
        };
    },
    methods: {
        handleForm(mode, product) {
            this.isFormOpen = true;
            this.formMode = mode;
            this.editedForm = product;
            mode == "edit"
                ? (this.formLayout.title = "Modifier un service/produit")
                : (this.formLayout.title = "Ajouter un service/produit");
        },
        closeForm() {
            this.isFormOpen = false;
        },
        handleRemove(id) {
            try {
                //call point API to delete a product/service
                //in mixins
                //load products
                // await this.deleteProductService(id)
                //  this.loadProductsServices()
            } catch (error) {
                console.log(id);
            }
        },
        async handleRegister(item, mode) {
            if (mode == "add" || mode == "duplicate") {
                // await this.addProductService(item)
                //  this.loadProductsServices()
            } else {
                //  await this.modifyProductService(item)
            }
        }
    }
};
</script>
