import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SellerProduct from './SellerProducts';
import AddProduct from './Addproduct1'

export default () => (
    <>

    <Tabs>
    <TabList>
      <Tab>Your Products</Tab>
      <Tab>Add Product</Tab>
    </TabList>

    <TabPanel>

      <SellerProduct></SellerProduct>
    </TabPanel>
    <TabPanel>
        <AddProduct></AddProduct>
    </TabPanel>
  </Tabs>
    </>

);