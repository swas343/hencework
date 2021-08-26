import Card from "../components/UI/Card";
import GraphCard from "../components/UI/GraphCard";
import MapCard from "../components/UI/MapCard";
import CalendarCard from "../components/UI/CalendarCard";
import TableCard from "../components/UI/TableCard";

import {
    DataChart1, OptionsChart1, 
    DataChart2, OptionsChart2, 
    LegendChart3, DataChart3, 
    OptionsChart3, LegendChart4, 
    DataChart4, OptionsChart4,
    MapMarkers
} from '../constants/chartConfig';

import { DataTable1,DataTable2 } from "../constants/tableData";

const Home = () => {
    const graphStyle1 = {"width": "100%", "height": "450px"}
    const graphStyle2 = {"width": "100%", "height": "420px"}
    return (
        // <!-- ========== section start ========== -->
      <section className="section">
        <div className="container-fluid">
          {/* <!-- ========== title-wrapper start ========== --> */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title mb-30">
                  <h2>eCommerce Dashboard</h2>
                </div>
              </div>
              {/* <!-- end col --> */}
              <div className="col-md-6">
                <div className="breadcrumb-wrapper mb-30">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#0">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        eCommerce
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- ========== title-wrapper end ========== --> */}
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <Card 
                    iconColor='purple'
                    icon='lni-cart-full'
                    text='New Orders'
                    numbers='34567'
                    textClass='text-success'
                    arrow='lni-arrow-up'
                    changePercentage='+2.00%'
                    changeText='30 days'
                />
              {/* <!-- End Icon Cart --> */}
            </div>
            {/* <!-- End Col --> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <Card 
                    iconColor='success'
                    icon='lni-dollar'
                    text='Total Income'
                    numbers='$74,567'
                    textClass='text-success'
                    arrow='lni-arrow-up'
                    changePercentage='+5.45%'
                    changeText='Increased'
                    
                />
              {/* <!-- End Icon Cart --> */}
            </div>
            {/* <!-- End Col --> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <Card 
                    iconColor='primary'
                    icon='lni-credit-cards'
                    text='Total Expense'
                    numbers='$24,567'
                    textClass='text-danger'
                    arrow='lni-arrow-down'
                    changePercentage='-2.00%'
                    changeText='Expense'
                />
              {/* <!-- End Icon Cart --> */}
            </div>
            {/* <!-- End Col --> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <Card 
                    iconColor='orange'
                    icon='lni-user'
                    text='New User'
                    numbers='34567'
                    textClass='text-danger'
                    arrow='lni-arrow-down'
                    changePercentage='-25.00%'
                    changeText='Earning'
                />
              {/* <!-- End Icon Cart --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
          <div className="row">
            <div className="col-lg-7">
                <GraphCard 
                    heading="Yearly subscription"
                    subHeading="$245,479"
                    dropdown={["Yearly","Monthly","Weekly"]}
                    id="chart1"
                    type="line"
                    data={DataChart1}
                    options={OptionsChart1}
                    style={graphStyle1}
                />
            </div>
            {/* <!-- End Col --> */}
            <div className="col-lg-5">
                <GraphCard 
                    heading="Sales/Revenue"
                    // subHeading="$245,479"
                    dropdown={["Yearly","Monthly","Weekly"]}
                    id="chart2"
                    type="bar"
                    data={DataChart2}
                    options={OptionsChart2}
                    style={graphStyle1}
                />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
          <div className="row">
            <div className="col-lg-5">
                <MapCard 
                    id="map1"
                    markers={MapMarkers}
                />
            </div>
            {/* <!-- End Col --> */}
            <div className="col-lg-7">
              <TableCard 
                heading="Top Selling Products"
                dropdown={['Yearly', 'Monthly', 'Weekly']}
                checkbox={true}
                thead={DataTable2.thead}
                body={DataTable2.tbody} 
              />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
          <div className="row">
            <div className="col-lg-7">
                <GraphCard 
                    heading="Sales Forecast"
                    subHeading="$245,479"
                    dropdown={["Last Month","Last 3 Months","Last Year"]}
                    id="chart3"
                    type="line"
                    data={DataChart3}
                    options={OptionsChart3}
                    legend={LegendChart3}
                    style={graphStyle1}
                />
              
            </div>
            {/* <!-- End Col --> */}
            <div className="col-lg-5">
                <GraphCard 
                    heading="Traffic"
                    dropdown={["Last Month","Last 3 Months","Last Year"]}
                    id="chart4"
                    type="bar"
                    data={DataChart4}
                    options={OptionsChart4}
                    legend={LegendChart4}
                    style={graphStyle2}
                />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
          <div className="row">
            <div className="col-lg-5">
              <CalendarCard id="calendar-mini" />
            </div>
            {/* <!-- End Col --> */}
            <div className="col-lg-7">
              <TableCard 
                heading="Sales History"
                dropdown={['Today', 'Yesterday']}
                thead={DataTable1.thead}
                body={DataTable1.tbody} 
              />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
    //   <!-- ========== section end ========== -->
    )
}

export default Home;