import React, { Component } from 'react';
import Card from '../cards/card.component.jsx';
import '../Home/home.scss';
import {BrowserRouter,Link} from 'react-router-dom'
export class filterchild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alldata: [],
            launchyear:[] 
            
        };
        
    }
    componentDidMount() {
      const datafetcherall=  async ()=> {
            const response = await fetch('https://api.spaceXdata.com/v3/launches?limit=100');
          const data = await response.json();
          console.log(data)
          this.setState({ alldata: data })
       
           
        }

        datafetcherall();
        
        

    }

    render() {
        const arrall = this.state.alldata;
        const filterparam = this.props.match.params.filtercontent;
     
        const filterval = this.props.match.params.filtervalue;
        let content

        
        if (filterparam == 'launch_year') {
            content = arrall.filter((item,index)=>item.launch_year==filterval).map(({flight_number,...otherprops}) =><Card key={flight_number} data={otherprops} />)
        }
        
        if (filterparam == 'launch_success') {
            if (filterval == 'true') { content = arrall.filter((item, index) => item.launch_success == true).map(({ flight_number, ...otherprops }) => <Card key={flight_number} data={otherprops} />) }
            else
            if (filterval == 'false')   
            content = arrall.filter((item, index) => item.launch_success == false).map(({ flight_number, ...otherprops }) => <Card key={flight_number} data={otherprops} />)
        }
        
        if (filterparam == 'land_success') {
            if(filterval=='true')
                content = arrall.filter((item, index) => item.rocket.first_stage.cores[0].land_success == true).map(({ flight_number, ...otherprops }) => <Card key={flight_number} data={otherprops} />)
                else
                if (filterval == 'false')
                content = arrall.filter((item, index) => item.rocket.first_stage.cores[0].land_success == null).map(({ flight_number, ...otherprops }) => <Card key={flight_number} data={otherprops} />)
        }   

        
  console.log(this.props)
      
        return (
           
            <div className="parent-container">
               
                <div className="Header">SpaceX Launch Programs</div>
                <div className="content">
                    <div className="filter-container">
                    <Link to='/' className={this.props.match.url=='/'?'selected':'filter-button'}> Home</Link>
                    <span className="filter-content-heading"> Launch Year</span>

<div className="year-box">
                             <Link to='/launch_year/2006' className={this.props.match.url=='/launch_year/2006'?'selected':'filter-button'}> 2006</Link>
                            <Link to='/launch_year/2007' className={this.props.match.url=='/launch_year/2007'?'selected':'filter-button'}> 2007</Link>
                            <Link to='/launch_year/2008' className={this.props.match.url=='/launch_year/2008'?'selected':'filter-button'} > 2008</Link>
                            <Link to='/launch_year/2009' className={this.props.match.url=='/launch_year/2009'?'selected':'filter-button'}> 2009</Link>
                            <Link to='/launch_year/2010' className={this.props.match.url=='/launch_year/2010'?'selected':'filter-button'}> 2010</Link>
                            <Link to='/launch_year/2011' className={this.props.match.url=='/launch_year/2011'?'selected':'filter-button'}> 2011</Link>
                            <Link to='/launch_year/2012' className={this.props.match.url=='/launch_year/2012'?'selected':'filter-button'}> 2012</Link>
                            <Link to='/launch_year/2013' className={this.props.match.url=='/launch_year/2013'?'selected':'filter-button'}> 2013</Link>
                            <Link to='/launch_year/2014' className={this.props.match.url=='/launch_year/2014'?'selected':'filter-button'}> 2014</Link>
                            <Link to='/launch_year/2015' className={this.props.match.url=='/launch_year/2015'?'selected':'filter-button'}> 2015</Link>
                            <Link to='/launch_year/2016' className={this.props.match.url=='/launch_year/2016'?'selected':'filter-button'}> 2016</Link>
                            <Link to='/launch_year/2017' className={this.props.match.url=='/launch_year/2017'?'selected':'filter-button'}> 2017</Link>
                            <Link to='/launch_year/2018' className={this.props.match.url=='/launch_year/2018'?'selected':'filter-button'}> 2018</Link>
                            <Link to ='/launch_year/2019' className={this.props.match.url=='/launch_year/2019'?'selected':'filter-button'}> 2019</Link>
                            <Link to ='/launch_year/2020' className={this.props.match.url=='/launch_year/2020'?'selected':'filter-button'}> 2020</Link>
    </div>
    
    <span className="filter-content-heading"> Launch Success</span>
    <div className="launch-box">
        <div> <Link to='/launch_success/true' className={this.props.match.url=='/launch_success/true'?'selected':'filter-button'}> True</Link> </div>
        <div>  <Link to='/launch_success/false'className={this.props.match.url=='/launch_success/false'?'selected':'filter-button'}> false</Link> </div>
        
       
    </div>
    
    <span className="filter-content-heading"> Landing Success</span>

<div className="landing-box">
       <div> <Link to='/land_success/true' className={this.props.match.url=='/land_success/true'?'selected':'filter-button'}> True</Link> </div> 
       <div> <Link to='/land_success/false'className={this.props.match.url=='/land_success/false'?'selected':'filter-button'}> False</Link> </div> 
</div>
                    </div>
                    <div className="cards-container">
                   
                    {content}
                    </div>


                </div>
                <div className="footer">developed by Rohan David</div>

              
              
               
                </div>
              
        )
    }
}

export default filterchild
 //  {arr.map(({flight_number,...otherprops}) =><Card key={flight_number} data={otherprops} />)}
  //  {arr.filter(item).map(({flight_number,...otherprops}) =><Card key={flight_number} data={otherprops} />)}
  //   {content}