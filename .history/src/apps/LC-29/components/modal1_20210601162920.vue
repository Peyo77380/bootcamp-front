<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="warning" dark v-on="on">Ajouter</v-btn>
      </template> -->

      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
            <ul class="list-group">
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Alina Mcloughlin</div>
                          <div class="widget-subheading">A short profile description</div>
                        </div>
                        <div class="widget-content-right">
                          <div role="group" class="btn-group-sm btn-group">
                            <button type="button" class="btn-shadow btn btn-primary">Hire</button>
                            <button type="button" class="btn-shadow btn btn-primary">Fire</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded" src="@/assets/images/avatars/5.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Ruben Tillman</div>
                          <div class="widget-subheading">Etiam sit amet orci eget eros faucibus</div>
                        </div>
                        <div class="widget-content-right">
                          <div class="badge badge-danger">NEW</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded-circle" src="@/assets/images/avatars/8.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Vinnie Wagstaff</div>
                        </div>
                        <div class="widget-content-right">
                          <button class="btn-pill btn-hover-shine btn btn-focus btn-sm">Details</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Ella-Rose Henry</div>
                          <div class="widget-subheading">Lorem ipsum dolor sit amet, consectetuer</div>
                        </div>
                        <div class="widget-content-right">
                          <div class="widget-numbers text-primary"><span>$ 568</span></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="42" class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Eliot Huber</div>
                        </div>
                        <div class="widget-content-right">
                          <div class="ml-auto badge badge-pill badge-warning">43</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img width="42" class="rounded" src="@/assets/images/avatars/4.jpg" alt="">
                          </div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">Product Sales</div>
                          <div class="widget-subheading opacity-10">
                            <span class="pr-2"><b>43</b> Sales</span>
                            <span><b class="text-success">$156,24</b> Totals</span>
                          </div>
                        </div>
                        <div class="widget-content-right text-right mr-3">
                          <div><b>52,5%</b></div>
                          YoY Growth
                        </div>
                        <div class="widget-content-right">
                          <div class="progress-circle-wrapper">
                            <div class="circle-progress">
                              <vue-circle
                                :progress="76"
                                :size="50"
                                :reverse="false"
                                line-cap="round"
                                empty-fill="rgba(0, 0, 0, .1)"
                                :animation-start-value="0.0"
                                :start-angle="0"
                                insert-mode="append"
                                :thickness="3"
                                :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left">
                          <div class="widget-heading">Product Sales</div>
                        </div>
                        <div class="widget-content-right">
                          <div class="progress-circle-wrapper">
                            <div class="circle-progress">
                              <vue-circle
                                :progress="23"
                                :size="45"
                                :reverse="false"
                                line-cap="round"
                                empty-fill="rgba(0, 0, 0, .15)"
                                :animation-start-value="0.0"
                                :start-angle="0"
                                insert-mode="append"
                                :thickness="2"
                                :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="icon-wrapper border-light rounded m-0">
                            <div class="icon-wrapper-bg bg-light"></div>
                            <i class="lnr-cog icon-gradient bg-happy-itmeo"></i></div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Hidden Actions Pane</div>
                        </div>
                        <div class="widget-content-right widget-content-actions">
                          <button class="btn-pill btn btn-outline-primary">Follow</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left center-elem mr-2"><i class="pe-7s-file text-muted fsize-2"></i></div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Example file 1</div>
                        </div>
                        <div class="widget-content-right">
                          <button class="btn-icon btn-icon-only btn btn-link"><i class="pe-7s-download fsize-2 btn-icon-wrapper"> </i></button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
          <ul>
              
            <li class="row">Lorem, ipsum. <b-button
                      class="ml-4 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      @click="edit(list.id)"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button></li>
            
            <li class="row">Lorem, ipsum. <b-button
                      class="ml-4 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      @click="edit(list.id)"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button></li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm8 md6>
                <v-text-field label="Categorie" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm8 md6>
                <v-text-field
                  label="Valeur"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    edit() {
      this.$emit("save");
    },
  },
};
</script>
