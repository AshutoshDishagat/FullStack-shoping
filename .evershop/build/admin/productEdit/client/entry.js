
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e413ea3b104b2c90017d52d99600a04ad from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e1eee6a151224c041738d1f594a9de614 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import ef10195005423af078f50c5c64409629a from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import eab12369d8e4499406bcea272440c8388 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/Collection.js';
import eb595b78b5653abd289aa8d1550b320c6 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/ProductEditForm.js';
import eeb84dbf303baef89411fe83958b72a9b from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit/VariantGroup.js';
import e2fd1bc96a2198d57e53d9b1706382a48 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Attributes.js';
import e94872530981f47cf06ecba3141c04076 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/FormContent.js';
import e8bd55a19884bbcbab678e7f7190a1726 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/General.js';
import e5f8f274d027bb238c7988b46a487b0ea from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Inventory.js';
import e9f1238ba9a4b8c930c3a7c6e0af4e12e from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Media.js';
import e85c99ae9c3a1a186f7f1b6149c32352d from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/PageHeading.js';
import eb249aa57d7c0d197e818950c1deebd2e from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Seo.js';
import ebf099f86ca2f0479d819ae21225a3fb3 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Status.js';
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
  rightSide: {
    eab12369d8e4499406bcea272440c8388: {
      id: 'eab12369d8e4499406bcea272440c8388',
      sortOrder: 15,
      component: { default: eab12369d8e4499406bcea272440c8388 }
    },
    e2fd1bc96a2198d57e53d9b1706382a48: {
      id: 'e2fd1bc96a2198d57e53d9b1706382a48',
      sortOrder: 30,
      component: { default: e2fd1bc96a2198d57e53d9b1706382a48 }
    },
    e5f8f274d027bb238c7988b46a487b0ea: {
      id: 'e5f8f274d027bb238c7988b46a487b0ea',
      sortOrder: 15,
      component: { default: e5f8f274d027bb238c7988b46a487b0ea }
    },
    ebf099f86ca2f0479d819ae21225a3fb3: {
      id: 'ebf099f86ca2f0479d819ae21225a3fb3',
      sortOrder: 10,
      component: { default: ebf099f86ca2f0479d819ae21225a3fb3 }
    }
  },
  content: {
    eb595b78b5653abd289aa8d1550b320c6: {
      id: 'eb595b78b5653abd289aa8d1550b320c6',
      sortOrder: 10,
      component: { default: eb595b78b5653abd289aa8d1550b320c6 }
    },
    e85c99ae9c3a1a186f7f1b6149c32352d: {
      id: 'e85c99ae9c3a1a186f7f1b6149c32352d',
      sortOrder: 5,
      component: { default: e85c99ae9c3a1a186f7f1b6149c32352d }
    }
  },
  leftSide: {
    eeb84dbf303baef89411fe83958b72a9b: {
      id: 'eeb84dbf303baef89411fe83958b72a9b',
      sortOrder: 70,
      component: { default: eeb84dbf303baef89411fe83958b72a9b }
    },
    e8bd55a19884bbcbab678e7f7190a1726: {
      id: 'e8bd55a19884bbcbab678e7f7190a1726',
      sortOrder: 10,
      component: { default: e8bd55a19884bbcbab678e7f7190a1726 }
    },
    e9f1238ba9a4b8c930c3a7c6e0af4e12e: {
      id: 'e9f1238ba9a4b8c930c3a7c6e0af4e12e',
      sortOrder: 15,
      component: { default: e9f1238ba9a4b8c930c3a7c6e0af4e12e }
    },
    eb249aa57d7c0d197e818950c1deebd2e: {
      id: 'eb249aa57d7c0d197e818950c1deebd2e',
      sortOrder: 60,
      component: { default: eb249aa57d7c0d197e818950c1deebd2e }
    }
  },
  productForm: {
    e94872530981f47cf06ecba3141c04076: {
      id: 'e94872530981f47cf06ecba3141c04076',
      sortOrder: 10,
      component: { default: e94872530981f47cf06ecba3141c04076 }
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