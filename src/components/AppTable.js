import React, { PureComponent } from 'react';
import price from '../Images/Price.png'
import calender from '../Images/calendar.png'
import statistics from '../Images/statistics-report.png'
import file from '../Images/file.png'
import '../App.css';
import Calender from './Calender'
import Modal from 'react-modal';
import modal from '../Images/modal.png'


import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { dateFormat } from './DateFormatter'


const customStyles = {
    content: {
        top: '20%',
        left: '35%',
        right: '35%',
        bottom: '20%',
        overflow: true
    }
};

export default class AppTable extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0,
            isShowCalender: false,
            isShowModal: false,
            data: [
                {
                    "id": 1,
                    "name": "Test Whatsapp",
                    "region": "US",
                    "createdOn": 1559807714999,
                    "price": "Price info of Test Whatsapp",
                    "csv": "Some CSV link for Whatsapp",
                    "report": "Some report link for Whatsapp",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 2,
                    "name": "Super Jewels Quest",
                    "region": "CA, FR",
                    "createdOn": 1559806715124,
                    "price": "Price info of Super Jewels Quest",
                    "csv": "Some CSV link for Super Jewels Quest",
                    "report": "Some report link for Super Jewels Ques",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 3,
                    "name": "Mole Slayer",
                    "region": "FR",
                    "createdOn": 1559806711124,
                    "price": "Price info of Mole Slayer",
                    "csv": "Some CSV link for Mole Slayer",
                    "report": "Some report link for Mole Slayer",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 4,
                    "name": "Mancala Mix",
                    "region": "JP",
                    "createdOn": 1559806680124,
                    "price": "Price info of Mancala Mix",
                    "csv": "Some CSV link for Mancala Mix",
                    "report": "Some report link for Mancala Mix",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 5,
                    "name": "Test Whatsapp",
                    "region": "US",
                    "createdOn": 1559807714999,
                    "price": "Price info of Test Whatsapp",
                    "csv": "Some CSV link for Whatsapp",
                    "report": "Some report link for Whatsapp",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 6,
                    "name": "Super Jewels Quest",
                    "region": "CA, FR",
                    "createdOn": 1559806715124,
                    "price": "Price info of Super Jewels Quest",
                    "csv": "Some CSV link for Super Jewels Quest",
                    "report": "Some report link for Super Jewels Ques",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 7,
                    "name": "Mole Slayer",
                    "region": "FR",
                    "createdOn": 1559806711124,
                    "price": "Price info of Mole Slayer",
                    "csv": "Some CSV link for Mole Slayer",
                    "report": "Some report link for Mole Slayer",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 8,
                    "name": "Mancala Mix",
                    "region": "JP",
                    "createdOn": 1559806680124,
                    "price": "Price info of Mancala Mix",
                    "csv": "Some CSV link for Mancala Mix",
                    "report": "Some report link for Mancala Mix",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 9,
                    "name": "Test Whatsapp",
                    "region": "US",
                    "createdOn": 1559807714999,
                    "price": "Price info of Test Whatsapp",
                    "csv": "Some CSV link for Whatsapp",
                    "report": "Some report link for Whatsapp",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 10,
                    "name": "Super Jewels Quest",
                    "region": "CA, FR",
                    "createdOn": 1559806715124,
                    "price": "Price info of Super Jewels Quest",
                    "csv": "Some CSV link for Super Jewels Quest",
                    "report": "Some report link for Super Jewels Ques",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 11,
                    "name": "Mole Slayer",
                    "region": "FR",
                    "createdOn": 1559806711124,
                    "price": "Price info of Mole Slayer",
                    "csv": "Some CSV link for Mole Slayer",
                    "report": "Some report link for Mole Slayer",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                },
                {
                    "id": 12,
                    "name": "Mancala Mix",
                    "region": "JP",
                    "createdOn": 1559806680124,
                    "price": "Price info of Mancala Mix",
                    "csv": "Some CSV link for Mancala Mix",
                    "report": "Some report link for Mancala Mix",
                    "image_url": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
                }
            ]
        }
    }

    componentDidMount() {
        let tableData = window.localStorage.getItem('tableData')
        tableData = tableData ? JSON.parse(tableData) : null
        let data = tableData && tableData.length ? tableData : JSON.parse(JSON.stringify(this.state.data))
        let updatedData = data.map((item) => {
            const createdData = new Date(item.createdOn)
            const currentDate = new Date()
            item.diffTime = currentDate.getDate() - createdData.getDate();
            return item
        })
        window.localStorage.setItem('tableData',JSON.stringify(updatedData))
        this.setState({ data: updatedData })
    }



    CustomTab(data) {
        return (
            <Tab className="tab" style={{
                display: "inline-block",
                paddingLeft: 5,
                padding: "5px 10px 15px",
                marginRight: "50px",
                cursor: "pointer",
                opacity: "0.8",
                ":hover": {
                    opacity: 1.6
                }
            }}>
                <div>{data}</div>
            </Tab>
        )
    }

    renderTableHeader() {
        let header = ['Date', 'Compaign', 'View', 'Actions']
        return (
            <div className="table-header" id="table-header-color" style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <div className="table-header-data" style={{ alignItems: 'center', width: '18%', marginLeft: 15 }}>DATE</div>
                <div className="table-header-data" style={{ width: '27%', alignItems: 'center' }}>COMPAIGN</div>
                <div className="table-header-data" style={{ width: '18%' }}>VIEW</div>
                <div className="table-header-data" style={{ width: '37%' }}>ACTIONS</div>
            </div>
        )
    }

    renderDateData(createdOn) {
        const createdData = new Date(createdOn)
        const currentDate = new Date()
        const diffTime = currentDate.getDate() - createdData.getDate();
        return (
            <div style={{ alignItems: 'center', width: '18%', marginLeft: 15 }}>
                <div style={{ fontFamily: 'sans-serif', color: '#0a0e52' }}>{`${dateFormat(createdData, "mmmm yyyy, d")}`}</div>
                <div style={{ fontSize: 13, color: '#a1a1a1', fontStyle: 'italic', fontFamily: 'sans-serif' }}>{`${Math.abs(diffTime)} Days ${diffTime < 0 ? 'Ahead' : 'Ago'}`}</div>
            </div>
        )

    }

    renderCompaignData(name, region, image_url, width) {
        return (
            <div style={{ alignItems: 'center', width: `${width}%`, flexDirection: 'row' }} className="compaign-data">
                <img src={image_url} style={{ width: width + 13, height: width + 13, marginRight: 10 }} alt="logo" />

                <div style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ fontSize: 16, color: '#0a0e52', fontFamily: 'sans-serif', width: '100%', opacity: 0.8 }}>
                        {name}
                    </div>
                    <div style={{ fontSize: 13, color: '#a1a1a1', fontStyle: 'italic', fontFamily: 'sans-serif', marginTop: 10 }}>
                        {region}
                    </div>
                </div>
            </div>
        )
    }

    checkForOnPress(type) {
        if (type == 'IS_SHOW_MODAL') {
            this.setState({ isShowModal: true })
        }
    }

    handleCloseModal = () => {
        this.setState({ isShowModal: false });
    }

    renderModalView() {
        return (
            <Modal
                isOpen={this.state.isShowModal}
                contentLabel="Minimal Modal Example"
                onRequestClose={this.handleCloseModal}
                shouldCloseOnOverlayClick={false}
                overlayClassName="modal-overlay"
                style={customStyles}>
                <div>
                    {this.renderCompaignData('PUBG MOBILE', 'US', modal, 100)}
                    <div style={{marginTop : 10, fontFamily : 'sans-serif', fontSize : 26, fontWeight : 'bold', color : '#0a0e52'}}>Pricing</div>
                    {this.renderModalContent('1 Months', '100.00')}
                    {this.renderModalContent('1 Week', '500.00')}
                    {this.renderModalContent('2 Months', '200.00')}
                    <div style={{ alignItems: 'center', justifyContent: 'center', width: '100%', marginLeft: '40%', marginTop: 50 }}>
                        <button onClick={this.handleCloseModal} style={{ width: 60, height: 35 }} >Close</button>
                    </div>
                </div>


            </Modal>
        )
    }

    renderModalContent(date, price) {
        return (
            <div style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }} className="compaign-data">
                <div style={{ fontSize: 15, color: '#a1a1a1', fontFamily: 'sans-serif', width: '100%' }}>
                    {date}
                </div>
                <div style={{ fontSize: 15, color: '#0a0e52', fontFamily: 'sans-serif', opacity: 0.8 }}>
                    {price}
                </div>
            </div>
        )
    }

    renderViewPricing(label, logo, width, type) {
        return (
            <div type={'reset'} style={{ alignItems: 'center', width: `${width}%`, flexDirection: 'row' }} className="compaign-data" onClick={() => this.checkForOnPress(type)} >
                <img src={logo} style={{ width: 25, height: 25, marginRight: 10 }} alt="logo" />

                <div style={{ fontSize: 13, color: '#0a0e52', fontFamily: 'sans-serif', width: '100%', opacity: 0.6 }} >
                    {label}
                </div>
            </div>
        )
    }

    setDate = (date, id) => {
        let currentData = JSON.parse(JSON.stringify(this.state.data))
        let updatedData = currentData.map((item) => {
            if (item.id == id) {
                item.createdOn = date
                const createdData = new Date(item.createdOn)
                const currentDate = new Date()
                item.diffTime = currentDate.getDate() - createdData.getDate();
            }
            return item
        })
        window.localStorage.setItem('tableData',JSON.stringify(updatedData))
        this.setState({ data: updatedData })
    }

    renderActionsData(id) {
        return (
            <div style={{ alignItems: 'center', width: '40%', flexDirection: 'row' }} className="compaign-data" >
                {this.renderViewPricing('CSV', file, 25)}
                {this.renderViewPricing('Report', statistics, 35)}
                <div style={{ width: '40%', alignItems: 'center' }} className="compaign-data">
                    <div style={{ width: '20%' }}>
                        <Calender icon={calender} value={'Scheduled Again'} setDate={(date) => { this.setDate(date, id) }} />
                    </div>
                    <div style={{ fontSize: 13, color: '#0a0e52', fontFamily: 'sans-serif', width: '100%', opacity: 0.6, overflow: 'hidden' }}>
                        Scheduled Again
                </div>
                </div>
            </div>
        )
    }

    renderTableData(data) {
        return data.map((student, index) => {
            const { id, name, age, email, createdOn, region, image_url } = student //destructuring
            return (
                <div className="table">
                    <div key={id} className="table-data" style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                        {this.renderDateData(createdOn)}
                        {this.renderCompaignData(name, region, image_url, 27)}
                        {this.renderViewPricing('View Pricing', price, 18, 'IS_SHOW_MODAL')}
                        {this.renderActionsData(id)}

                    </div>
                    <div className="border-wid" />
                </div>
            )
        })
    }

    renderTable(data) {
        return (
            <div id='students'>
                {this.renderTableHeader()}
                {this.renderTableData(data)}
            </div>
        )
    }

    render() {
        return (
            <Tabs style={{}} disabledTabClassName="disabled-tab" selectedTabClassName="tabs-selected" className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList className="tabList" style={{ borderBottomWidth: 1 }}>
                    {this.CustomTab('Upcoming Campaigns')}
                    {this.CustomTab('Live Campaigns')}
                    {this.CustomTab('Past Campaigns')}
                </TabList>
                <TabPanel>{this.renderTable(this.state.data.filter((item) => item.diffTime < 0))}</TabPanel>
                <TabPanel>{this.renderTable(this.state.data.filter((item) => item.diffTime == 0))}</TabPanel>
                <TabPanel>{this.renderTable(this.state.data.filter((item) => item.diffTime > 0))}</TabPanel>
                {this.renderModalView()}
            </Tabs>
        )
    }
}