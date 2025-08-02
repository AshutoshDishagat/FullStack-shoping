
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e413ea3b104b2c90017d52d99600a04ad from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e1eee6a151224c041738d1f594a9de614 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import ef10195005423af078f50c5c64409629a from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import e4a7ab3927ba3c59c783138f16e03f675 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit/CategoryEditForm.js';
import ef0c00beb439fa96e34471dbb24b807e9 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit/Products.js';
import e9c1e82dbc46cdcc01c29835c9a40e393 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/FormContent.js';
import ed7fd297f07dc541509c7dfb52dc3ff1e from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/General.js';
import e7e28e9924b9143ed3ddee978cf08573c from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/Image.js';
import e97ab5fcc37e940d2f59468531d1bad11 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/PageHeading.js';
import e1d99d7b07108f89dc24459160c7425d4 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/Seo.js';
import e00c7fa348f7977f5861bdb1667127453 from 'file:///A:/CHAIR%20Shopping/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/Status.js';
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
    e4a7ab3927ba3c59c783138f16e03f675: {
      id: 'e4a7ab3927ba3c59c783138f16e03f675',
      sortOrder: 10,
      component: { default: e4a7ab3927ba3c59c783138f16e03f675 }
    },
    e97ab5fcc37e940d2f59468531d1bad11: {
      id: 'e97ab5fcc37e940d2f59468531d1bad11',
      sortOrder: 5,
      component: { default: e97ab5fcc37e940d2f59468531d1bad11 }
    }
  },
  leftSide: {
    ef0c00beb439fa96e34471dbb24b807e9: {
      id: 'ef0c00beb439fa96e34471dbb24b807e9',
      sortOrder: 15,
      component: { default: ef0c00beb439fa96e34471dbb24b807e9 }
    },
    ed7fd297f07dc541509c7dfb52dc3ff1e: {
      id: 'ed7fd297f07dc541509c7dfb52dc3ff1e',
      sortOrder: 10,
      component: { default: ed7fd297f07dc541509c7dfb52dc3ff1e }
    },
    e1d99d7b07108f89dc24459160c7425d4: {
      id: 'e1d99d7b07108f89dc24459160c7425d4',
      sortOrder: 60,
      component: { default: e1d99d7b07108f89dc24459160c7425d4 }
    }
  },
  categoryForm: {
    e9c1e82dbc46cdcc01c29835c9a40e393: {
      id: 'e9c1e82dbc46cdcc01c29835c9a40e393',
      sortOrder: 10,
      component: { default: e9c1e82dbc46cdcc01c29835c9a40e393 }
    }
  },
  rightSide: {
    e7e28e9924b9143ed3ddee978cf08573c: {
      id: 'e7e28e9924b9143ed3ddee978cf08573c',
      sortOrder: 10,
      component: { default: e7e28e9924b9143ed3ddee978cf08573c }
    },
    e00c7fa348f7977f5861bdb1667127453: {
      id: 'e00c7fa348f7977f5861bdb1667127453',
      sortOrder: 15,
      component: { default: e00c7fa348f7977f5861bdb1667127453 }
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