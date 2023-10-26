interface AllMenuItemsProps {
  label: string;
  linkTo: string;
  selectedOptionKey: string;
  dropDownMenu?: Array<dropDownProps>;
}

export interface dropDownProps {
  label: string;
  linkTo: string;
  selectedOptionKey: string;
}

export const TOP_HEADER_ROUTE = {
  HOME: "/",
  CART: "/cart",
  LOGIN: "/login",
};

export const HEADER_ROUTE = {
  EMBROIDERY_DESIGNS: "/embroidery-designs",
  EMBROIDERY_PATCHES: "/embroidery-patches",
  VECTOR_DESIGNS: "/victor-design",
  SILHOUETTE_ART: "/silhouette-art",
  STENCIL_ART: "/stencil-art",
  CUSTOMIZATION_REQUEST: "/customization-request",
};

export const AllMenusItems: Array<AllMenuItemsProps> = [
  {
    label: "Embroidery Designs",
    linkTo: HEADER_ROUTE.EMBROIDERY_DESIGNS,
    selectedOptionKey: HEADER_ROUTE.EMBROIDERY_DESIGNS,
    dropDownMenu: [
      {
        label: "Vector art 1",
        linkTo: "/dummy1",
        selectedOptionKey: "/dummy1",
      },
      {
        label: "Embroidery design",
        linkTo: "/dummy2",
        selectedOptionKey: "/dummy3",
      },
      {
        label: "Custom Vector Art",
        linkTo: "/dummy3",
        selectedOptionKey: "/dummy3",
      },
      {
        label: "Design Scenarios",
        linkTo: "/dummy4",
        selectedOptionKey: "/dummy4",
      },
      {
        label: "Dummy 5",
        linkTo: "/dummy5",
        selectedOptionKey: "/dummy5",
      },
      {
        label: "Dummy 6",
        linkTo: "/dummy6",
        selectedOptionKey: "/dummy6",
      },
      {
        label: "Dummy 7",
        linkTo: "/dummy7",
        selectedOptionKey: "/dummy7",
      },
      {
        label: "Dummy 8",
        linkTo: "/dummy8",
        selectedOptionKey: "/dummy8",
      },
      {
        label: "Dummy 9",
        linkTo: "/dummy9",
        selectedOptionKey: "/dummy9",
      },
      {
        label: "Dummy 10",
        linkTo: "/dummy10",
        selectedOptionKey: "/dummy10",
      },
      {
        label: "Dummy 11",
        linkTo: "/dummy11",
        selectedOptionKey: "/dummy11",
      },
      {
        label: "Dummy 12",
        linkTo: "/dummy12",
        selectedOptionKey: "/dummy12",
      },
    ],
  },
  {
    label: "Embroidery Patches",
    linkTo: HEADER_ROUTE.EMBROIDERY_PATCHES,
    selectedOptionKey: HEADER_ROUTE.EMBROIDERY_PATCHES,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/dummy13",
        selectedOptionKey: "/dummy13",
      },
      {
        label: "Dummy 14",
        linkTo: "/dummy14",
        selectedOptionKey: "/dummy14",
      },
      {
        label: "Dummy 15",
        linkTo: "/dummy15",
        selectedOptionKey: "/dummy15",
      },
      {
        label: "Dummy 16",
        linkTo: "/dummy16",
        selectedOptionKey: "/dummy16",
      },
      {
        label: "Dummy 17",
        linkTo: "/dummy17",
        selectedOptionKey: "/dummy17",
      },
      {
        label: "Dummy 18",
        linkTo: "/dummy18",
        selectedOptionKey: "/dummy18",
      },
      {
        label: "Dummy 19",
        linkTo: "/dummy19",
        selectedOptionKey: "/dummy19",
      },
      {
        label: "Dummy 20",
        linkTo: "/dummy20",
        selectedOptionKey: "/dummy20",
      },
      {
        label: "Dummy 21",
        linkTo: "/dummy21",
        selectedOptionKey: "/dummy21",
      },
      {
        label: "Dummy 22",
        linkTo: "/dummy22",
        selectedOptionKey: "/dummy22",
      },
      {
        label: "Dummy 23",
        linkTo: "/dummy23",
        selectedOptionKey: "/dummy23",
      },
      {
        label: "Dummy 24",
        linkTo: "/dummy24",
        selectedOptionKey: "/dummy24",
      },
    ],
  },
  {
    label: "Victory Designs",
    linkTo: HEADER_ROUTE.VECTOR_DESIGNS,
    selectedOptionKey: HEADER_ROUTE.VECTOR_DESIGNS,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/dummy13",
        selectedOptionKey: "/dummy13",
      },
      {
        label: "Dummy 14",
        linkTo: "/dummy14",
        selectedOptionKey: "/dummy14",
      },
      {
        label: "Dummy 15",
        linkTo: "/dummy15",
        selectedOptionKey: "/dummy15",
      },
      {
        label: "Dummy 16",
        linkTo: "/dummy16",
        selectedOptionKey: "/dummy16",
      },
      {
        label: "Dummy 17",
        linkTo: "/dummy17",
        selectedOptionKey: "/dummy17",
      },
      {
        label: "Dummy 18",
        linkTo: "/dummy18",
        selectedOptionKey: "/dummy18",
      },
      {
        label: "Dummy 19",
        linkTo: "/dummy19",
        selectedOptionKey: "/dummy19",
      },
      {
        label: "Dummy 20",
        linkTo: "/dummy20",
        selectedOptionKey: "/dummy20",
      },
      {
        label: "Dummy 21",
        linkTo: "/dummy21",
        selectedOptionKey: "/dummy21",
      },
      {
        label: "Dummy 22",
        linkTo: "/dummy22",
        selectedOptionKey: "/dummy22",
      },
      {
        label: "Dummy 23",
        linkTo: "/dummy23",
        selectedOptionKey: "/dummy23",
      },
      {
        label: "Dummy 24",
        linkTo: "/dummy24",
        selectedOptionKey: "/dummy24",
      },
    ],
  },
  {
    label: "Silhouette Art",
    linkTo: HEADER_ROUTE.SILHOUETTE_ART,
    selectedOptionKey: HEADER_ROUTE.SILHOUETTE_ART,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/dummy13",
        selectedOptionKey: "/dummy13",
      },
      {
        label: "Dummy 14",
        linkTo: "/dummy14",
        selectedOptionKey: "/dummy14",
      },
      {
        label: "Dummy 15",
        linkTo: "/dummy15",
        selectedOptionKey: "/dummy15",
      },
      {
        label: "Dummy 16",
        linkTo: "/dummy16",
        selectedOptionKey: "/dummy16",
      },
      {
        label: "Dummy 17",
        linkTo: "/dummy17",
        selectedOptionKey: "/dummy17",
      },
      {
        label: "Dummy 18",
        linkTo: "/dummy18",
        selectedOptionKey: "/dummy18",
      },
      {
        label: "Dummy 19",
        linkTo: "/dummy19",
        selectedOptionKey: "/dummy19",
      },
      {
        label: "Dummy 20",
        linkTo: "/dummy20",
        selectedOptionKey: "/dummy20",
      },
      {
        label: "Dummy 21",
        linkTo: "/dummy21",
        selectedOptionKey: "/dummy21",
      },
      {
        label: "Dummy 22",
        linkTo: "/dummy22",
        selectedOptionKey: "/dummy22",
      },
      {
        label: "Dummy 23",
        linkTo: "/dummy23",
        selectedOptionKey: "/dummy23",
      },
      {
        label: "Dummy 24",
        linkTo: "/dummy24",
        selectedOptionKey: "/dummy24",
      },
    ],
  },
  {
    label: "Stencil Art",
    linkTo: HEADER_ROUTE.STENCIL_ART,
    selectedOptionKey: HEADER_ROUTE.STENCIL_ART,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/dummy13",
        selectedOptionKey: "/dummy13",
      },
      {
        label: "Dummy 14",
        linkTo: "/dummy14",
        selectedOptionKey: "/dummy14",
      },
      {
        label: "Dummy 15",
        linkTo: "/dummy15",
        selectedOptionKey: "/dummy15",
      },
      {
        label: "Dummy 16",
        linkTo: "/dummy16",
        selectedOptionKey: "/dummy16",
      },
      {
        label: "Dummy 17",
        linkTo: "/dummy17",
        selectedOptionKey: "/dummy17",
      },
      {
        label: "Dummy 18",
        linkTo: "/dummy18",
        selectedOptionKey: "/dummy18",
      },
      {
        label: "Dummy 19",
        linkTo: "/dummy19",
        selectedOptionKey: "/dummy19",
      },
      {
        label: "Dummy 20",
        linkTo: "/dummy20",
        selectedOptionKey: "/dummy20",
      },
      {
        label: "Dummy 21",
        linkTo: "/dummy21",
        selectedOptionKey: "/dummy21",
      },
      {
        label: "Dummy 22",
        linkTo: "/dummy22",
        selectedOptionKey: "/dummy22",
      },
      {
        label: "Dummy 23",
        linkTo: "/dummy23",
        selectedOptionKey: "/dummy23",
      },
      {
        label: "Dummy 24",
        linkTo: "/dummy24",
        selectedOptionKey: "/dummy24",
      },
    ],
  },
  {
    label: "Customization Request",
    linkTo: HEADER_ROUTE.CUSTOMIZATION_REQUEST,
    selectedOptionKey: HEADER_ROUTE.CUSTOMIZATION_REQUEST,
    dropDownMenu: [
      {
        label: "Dummy 13",
        linkTo: "/dummy13",
        selectedOptionKey: "/dummy13",
      },
      {
        label: "Dummy 14",
        linkTo: "/dummy14",
        selectedOptionKey: "/dummy14",
      },
      {
        label: "Dummy 15",
        linkTo: "/dummy15",
        selectedOptionKey: "/dummy15",
      },
      {
        label: "Dummy 16",
        linkTo: "/dummy16",
        selectedOptionKey: "/dummy16",
      },
      {
        label: "Dummy 17",
        linkTo: "/dummy17",
        selectedOptionKey: "/dummy17",
      },
      {
        label: "Dummy 18",
        linkTo: "/dummy18",
        selectedOptionKey: "/dummy18",
      },
      {
        label: "Dummy 19",
        linkTo: "/dummy19",
        selectedOptionKey: "/dummy19",
      },
      {
        label: "Dummy 20",
        linkTo: "/dummy20",
        selectedOptionKey: "/dummy20",
      },
      {
        label: "Dummy 21",
        linkTo: "/dummy21",
        selectedOptionKey: "/dummy21",
      },
      {
        label: "Dummy 22",
        linkTo: "/dummy22",
        selectedOptionKey: "/dummy22",
      },
      {
        label: "Dummy 23",
        linkTo: "/dummy23",
        selectedOptionKey: "/dummy23",
      },
      {
        label: "Dummy 24",
        linkTo: "/dummy24",
        selectedOptionKey: "/dummy24",
      },
    ],
  },
];

export const FooterAllMenusItems: Array<AllMenuItemsProps> = [];
