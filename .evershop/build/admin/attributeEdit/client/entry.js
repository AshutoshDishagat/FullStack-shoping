
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e413ea3b104b2c90017d52d99600a04ad from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e1eee6a151224c041738d1f594a9de614 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import ef10195005423af078f50c5c64409629a from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ec25f152f22ef4ab2ce9b0747dd0385a9 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit/AttributeEditForm.js';
import eab0df2e0bccacd33e8b0425990bfed0a from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/Avaibility.js';
import e18be78593ba364a6e7ded411b31801a7 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/FormContent.js';
import e28d564616f3b4d11ff88593d148cc20a from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/General.js';
import e7a771dcc842b899acc4da753c5a5745e from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/attributeEdit+attributeNew/PageHeading.js';
import e710c5cecc4353a279592fa7bf66a1f57 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import eb3e09ec0010c03cc94392e481ca9852f from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e1b3e4196c286df99736112e0db918edd from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import ed864b30a992b761571cc7da41b183c24 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import e37e306bca272f756141e662886fade52 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e9678d5992403c6f296cb674323df9d36 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import ecd0077b721662a84dbdb785e65fbe8bb from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e7f1a934125db04b35e00c59c7c42e3b3 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e6e2679da3e72b83d7da60c0a0edf79c4 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e7ce09e95cf5afc211b025de4f274da75 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import eae9bd60ae2350aaae305bfe16ae034a4 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import eed87b957be189937f6106f7b9455068a from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e9b4fe1ecb3fd2b4a2f3ca08ea589f30a from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import ecfce5ca3d653b92dfd1ab8a2a6254ae5 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e24c0c50ec2d056e041094fbcd5384bc3 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e2d12d1cc7a4db4511cf0ac604bcbc6f8 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e9d66ad7b451d4fb4147cbe7014e9dbba from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import ec1657799665634a1e8dbbcc2cc56b8e8 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import eb6160619196d0082c6e8182364d0ebf1 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
Area.defaultProps.components = {
  header: {
    e413ea3b104b2c90017d52d99600a04ad: {
      id: 'e413ea3b104b2c90017d52d99600a04ad',
      sortOrder: 50,
      component: { default: e413ea3b104b2c90017d52d99600a04ad }
    },
    e37e306bca272f756141e662886fade52: {
      id: 'e37e306bca272f756141e662886fade52',
      sortOrder: 10,
      component: { default: e37e306bca272f756141e662886fade52 }
    },
    e7ce09e95cf5afc211b025de4f274da75: {
      id: 'e7ce09e95cf5afc211b025de4f274da75',
      sortOrder: 20,
      component: { default: e7ce09e95cf5afc211b025de4f274da75 }
    }
  },
  adminMenu: {
    e1eee6a151224c041738d1f594a9de614: {
      id: 'e1eee6a151224c041738d1f594a9de614',
      sortOrder: 20,
      component: { default: e1eee6a151224c041738d1f594a9de614 }
    },
    eb3e09ec0010c03cc94392e481ca9852f: {
      id: 'eb3e09ec0010c03cc94392e481ca9852f',
      sortOrder: 60,
      component: { default: eb3e09ec0010c03cc94392e481ca9852f }
    },
    e6e2679da3e72b83d7da60c0a0edf79c4: {
      id: 'e6e2679da3e72b83d7da60c0a0edf79c4',
      sortOrder: 10,
      component: { default: e6e2679da3e72b83d7da60c0a0edf79c4 }
    },
    eed87b957be189937f6106f7b9455068a: {
      id: 'eed87b957be189937f6106f7b9455068a',
      sortOrder: 40,
      component: { default: eed87b957be189937f6106f7b9455068a }
    },
    e9b4fe1ecb3fd2b4a2f3ca08ea589f30a: {
      id: 'e9b4fe1ecb3fd2b4a2f3ca08ea589f30a',
      sortOrder: 30,
      component: { default: e9b4fe1ecb3fd2b4a2f3ca08ea589f30a }
    },
    ecfce5ca3d653b92dfd1ab8a2a6254ae5: {
      id: 'ecfce5ca3d653b92dfd1ab8a2a6254ae5',
      sortOrder: 50,
      component: { default: ecfce5ca3d653b92dfd1ab8a2a6254ae5 }
    },
    e9d66ad7b451d4fb4147cbe7014e9dbba: {
      id: 'e9d66ad7b451d4fb4147cbe7014e9dbba',
      sortOrder: 500,
      component: { default: e9d66ad7b451d4fb4147cbe7014e9dbba }
    }
  },
  quickLinks: {
    ef10195005423af078f50c5c64409629a: {
      id: 'ef10195005423af078f50c5c64409629a',
      sortOrder: 20,
      component: { default: ef10195005423af078f50c5c64409629a }
    },
    e24c0c50ec2d056e041094fbcd5384bc3: {
      id: 'e24c0c50ec2d056e041094fbcd5384bc3',
      sortOrder: 30,
      component: { default: e24c0c50ec2d056e041094fbcd5384bc3 }
    }
  },
  content: {
    ec25f152f22ef4ab2ce9b0747dd0385a9: {
      id: 'ec25f152f22ef4ab2ce9b0747dd0385a9',
      sortOrder: 10,
      component: { default: ec25f152f22ef4ab2ce9b0747dd0385a9 }
    },
    e7a771dcc842b899acc4da753c5a5745e: {
      id: 'e7a771dcc842b899acc4da753c5a5745e',
      sortOrder: 5,
      component: { default: e7a771dcc842b899acc4da753c5a5745e }
    }
  },
  rightSide: {
    eab0df2e0bccacd33e8b0425990bfed0a: {
      id: 'eab0df2e0bccacd33e8b0425990bfed0a',
      sortOrder: 10,
      component: { default: eab0df2e0bccacd33e8b0425990bfed0a }
    }
  },
  attributeForm: {
    e18be78593ba364a6e7ded411b31801a7: {
      id: 'e18be78593ba364a6e7ded411b31801a7',
      sortOrder: 10,
      component: { default: e18be78593ba364a6e7ded411b31801a7 }
    }
  },
  leftSide: {
    e28d564616f3b4d11ff88593d148cc20a: {
      id: 'e28d564616f3b4d11ff88593d148cc20a',
      sortOrder: 10,
      component: { default: e28d564616f3b4d11ff88593d148cc20a }
    }
  },
  settingPageMenu: {
    e710c5cecc4353a279592fa7bf66a1f57: {
      id: 'e710c5cecc4353a279592fa7bf66a1f57',
      sortOrder: 15,
      component: { default: e710c5cecc4353a279592fa7bf66a1f57 }
    },
    e2d12d1cc7a4db4511cf0ac604bcbc6f8: {
      id: 'e2d12d1cc7a4db4511cf0ac604bcbc6f8',
      sortOrder: 10,
      component: { default: e2d12d1cc7a4db4511cf0ac604bcbc6f8 }
    },
    ec1657799665634a1e8dbbcc2cc56b8e8: {
      id: 'ec1657799665634a1e8dbbcc2cc56b8e8',
      sortOrder: 5,
      component: { default: ec1657799665634a1e8dbbcc2cc56b8e8 }
    },
    eb6160619196d0082c6e8182364d0ebf1: {
      id: 'eb6160619196d0082c6e8182364d0ebf1',
      sortOrder: 20,
      component: { default: eb6160619196d0082c6e8182364d0ebf1 }
    }
  },
  footerLeft: {
    e1b3e4196c286df99736112e0db918edd: {
      id: 'e1b3e4196c286df99736112e0db918edd',
      sortOrder: 10,
      component: { default: e1b3e4196c286df99736112e0db918edd }
    },
    eae9bd60ae2350aaae305bfe16ae034a4: {
      id: 'eae9bd60ae2350aaae305bfe16ae034a4',
      sortOrder: 20,
      component: { default: eae9bd60ae2350aaae305bfe16ae034a4 }
    }
  },
  body: {
    ed864b30a992b761571cc7da41b183c24: {
      id: 'ed864b30a992b761571cc7da41b183c24',
      sortOrder: 10,
      component: { default: ed864b30a992b761571cc7da41b183c24 }
    },
    e7f1a934125db04b35e00c59c7c42e3b3: {
      id: 'e7f1a934125db04b35e00c59c7c42e3b3',
      sortOrder: 10,
      component: { default: e7f1a934125db04b35e00c59c7c42e3b3 }
    }
  },
  head: {
    e9678d5992403c6f296cb674323df9d36: {
      id: 'e9678d5992403c6f296cb674323df9d36',
      sortOrder: 5,
      component: { default: e9678d5992403c6f296cb674323df9d36 }
    }
  },
  adminNavigation: {
    ecd0077b721662a84dbdb785e65fbe8bb: {
      id: 'ecd0077b721662a84dbdb785e65fbe8bb',
      sortOrder: 10,
      component: { default: ecd0077b721662a84dbdb785e65fbe8bb }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );