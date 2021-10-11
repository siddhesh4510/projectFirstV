import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SellerProduct from './SellerProducts';
import AddProduct from './Addproduct1'

export default () => (
    <>
    {/* <div style={{margin:"auto",textAlign:"center"}}>
    <h3>Hi Siddhesh</h3>
    </div> */}
    <Tabs>
    <TabList style={{backgroundColor:"#131921" , color:"orange"}}>
      <Tab>Add Product</Tab>
      <Tab>Your Product</Tab>
    </TabList>
    
    <TabPanel>
    <AddProduct></AddProduct>
      
    </TabPanel>
    <TabPanel >

        <SellerProduct></SellerProduct>
    </TabPanel>
  </Tabs>
    </>

);