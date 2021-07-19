<template>
  <div>
    <page-title
      :heading="heading"
      :subheading="subheading"
      :icon="icon"
    ></page-title>
    <div class="row mb-3">
      <h2 class="col-8 offset-1">Essai</h2>
      <b-button
        variant="btn btn-warning btn-lg col-2"
        :to="{ name: 'AddMembers' }"
      >
        ajouter un membre
      </b-button>
    </div>

    <div>
      <div class="col-md-12">
        <div class="main-card mb-3 card">
          <div class="card-header">Liste des membres de la CoLloc</div>

          <div class="table-responsive">
            <table
              class="align-middle mb-0 table table-borderless table-striped table-hover"
            >
              <thead>
                <tr>
                  <th class="text-center">Clé</th>
                  <th class="text-center">valeur</th>

                  <th class="text-center">
                    <i class="pe-7s-trash btn-icon-wrapper"> </i>
                  </th>
                  <th class="text-center">
                    <i class="pe-7s-pen btn-icon-wrapper"> </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-warning">Entreprise</div>
                  </td>

                  <td class="text-center">Berlin</td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-trash btn-icon-wrapper"> </i>
                    </button>
                  </td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-pen btn-icon-wrapper"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-success">auto entrepreneur</div>
                  </td>
                  <td class="text-center">Berlin</td>
                  <td class="text-center" style="width: 50px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-trash btn-icon-wrapper"> </i>
                    </button>
                  </td>
                  <td class="text-center" style="width: 50px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-pen btn-icon-wrapper"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-success">auto entrepreneur</div>
                  </td>
                  <td class="text-center">London</td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-trash btn-icon-wrapper"> </i>
                    </button>
                  </td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-pen btn-icon-wrapper"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-info">Particulier</div>
                  </td>
                  <td class="text-center">Amsterdam</td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-trash btn-icon-wrapper"> </i>
                    </button>
                  </td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-pen btn-icon-wrapper"> </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle";

export default {
 components: {}
};
</script>
