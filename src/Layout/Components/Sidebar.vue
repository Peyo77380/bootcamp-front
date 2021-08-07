<template>
    <div
        :class="sidebarbg"
        class="app-sidebar sidebar-shadow"
        @mouseover="toggleSidebarHover('add', 'closed-sidebar-open')"
        @mouseleave="toggleSidebarHover('remove', 'closed-sidebar-open')"
    >
        <div class="app-header__logo">
            <div class="logo-src" />
            <div class="header__pane ml-auto">
                <button
                    type="button"
                    class="hamburger close-sidebar-btn hamburger--elastic"
                    v-bind:class="{ 'is-active': isOpen }"
                    @click="toggleBodyClass('closed-sidebar')"
                >
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu" />
            </VuePerfectScrollbar>
        </div>
    </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
    components: {
        SidebarMenu,
        VuePerfectScrollbar
    },
    data() {
        return {
            isOpen: false,
            sidebarActive: false,
            menu: [
                {
                    header: true,
                    title: "Main Navigation"
                },
                {
                    title: "Dashboards",
                    icon: "pe-7s-rocket icon-gradient bg-ripe-malin",
                    child: [
                        {
                            href: "/",
                            title: "Demo page"
                        },
                        {
                            href: "/wallCardSunglo-1",
                            title: "Wall Cards - sunglo v1"
                        },
                        {
                            href: "/wallCardSunglo-2",
                            title: "Wall Cards - sunglo v2"
                        },
                        {
                            href: "/wallCardSunglo-3",
                            title: "Wall Cards - sunglo v3"
                        },
                        {
                            href: "/wallCardChocolate",
                            title: "Wall Cards - chocolate"
                        },
                        {
                            href: "/wallCardTradewind",
                            title: "Wall Cards - tradewind"
                        },
                        {
                            href: "/wallCardCorn",
                            title: "Wall Cards - corn"
                        },
                        {
                            href: "/wallCardMidnightBlue",
                            title: "Wall Cards - midnightBlue"
                        }
                    ]
                },
                {
                    title: "Buildings",
                    icon: "pe-7s-rocket",
                    href: "/buildings"
                },
                {
                    title: "configuration",
                    icon: "pe-7s-tools icon-gradient bg-ripe-malin",
                    child: [
                        {
                            href: "/configuration/",
                            title: "Keys / Values"
                        },

                        {
                            href: "/configuration/emails",
                            title: "Emails"
                        },
                        {
                            href: "/configuration/lists",
                            title: "Lists"
                        },
                        {
                            href: "/configuration/vatRates",
                            title: "VAT Rates"
                        },
                        {
                            href: "/configuration/payments",
                            title: "Payments"
                        },
                        {
                            href: "/configuration/faqs",
                            title: "FAQs"
                        },
                        {
                            href: "/configuration/attributes",
                            title: "Attributes"
                        }
                    ]
                },

            ],
            collapsed: true,

            windowWidth: 0
        };
    },
    props: {
        sidebarbg: String
    },
    methods: {
        toggleBodyClass(className) {
            const el = document.body;
            this.isOpen = !this.isOpen;

            if (this.isOpen) {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },
        toggleSidebarHover(add, className) {
            const el = document.body;
            this.sidebarActive = !this.sidebarActive;

            this.windowWidth = document.documentElement.clientWidth;

            if (this.windowWidth > "992") {
                if (add === "add") {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            }
        },
        getWindowWidth() {
            const el = document.body;

            this.windowWidth = document.documentElement.clientWidth;

            if (this.windowWidth < "1350") {
                el.classList.add("closed-sidebar", "closed-sidebar-md");
            } else {
                el.classList.remove("closed-sidebar", "closed-sidebar-md");
            }
        }
    },
    mounted() {
        this.$nextTick(function() {
            window.addEventListener("resize", this.getWindowWidth);

            //Init
            this.getWindowWidth();
        });
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.getWindowWidth);
    }
};
</script>
