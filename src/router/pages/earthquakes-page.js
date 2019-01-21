import React, { Component } from 'react';
import Header from '../../components/header/header';
import '../../components/earthquakes/EarthTable';
import EarthTable from '../../components/earthquakes/EarthTable';
import SortByMags from '../../components/earthquakes/SortByMags';
import SortByType from '../../components/earthquakes/SortByType';
import '../../scss/App.scss';
import '../../scss/components/earthquakes-table.scss';


const API = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';

class EarthquakesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			earthquakes:[],
			EQloaded: false,
			lowToHigh: false,
			options: [],
			magtype: '',
		};

		this.handleSortByMag = this.handleSortByMag.bind(this);
    this.handleSortByMagtype = this.handleSortByMagtype.bind(this);
	}

	componentWillMount() {	//bef init render get storage
		let localQuakes = JSON.parse(localStorage.getItem('earthquakes'));
		!!localQuakes &&
			this.setState({
				earthquakes: localQuakes.forEach(itm => {
					this.state.earthquakes.push(itm);
				}),
			});
  }

	componentDidMount() {//after init
		//not in storage search api
		fetch(API).then((response) => response.json())
			.then((data) => {
			data = data.features;
			this.setState(prevState => ({
				EQloaded: !prevState.EQloaded,
				earthquakes: data,
			}));
		});
	}

	handleSortByMag() {
		const quakes = this.state.earthquakes;
		!!this.state.lowToHigh &&
		quakes.sort((a,b) => {
			return b.properties.mag - a.properties.mag;
		}) && this.setState(prevState => ({
			earthquakes:quakes,
			lowToHigh: !prevState.lowToHigh,
		}));

		!this.state.lowToHigh &&
			quakes.sort((a,b) => {
				return a.properties.mag - b.properties.mag;
			}) && this.setState({
				earthquakes:quakes,
				lowToHigh: true,
			});
  }

  handleSortByMagtype(magty) {
		let mag = String(magty);
		const quakes = this.state.earthquakes;
		let items = [];
		quakes.filter(itm => {//leave out compare to lowerCase() in case there's a
			let q = itm.properties.magType; //difference btw 'md' && 'Md' etc.
		  if(q.indexOf(mag) > -1) {
				items.push(itm);
			}
			return items;
		});

		this.setState({
			earthquakes: [...items, ...quakes.filter(itx => {//others
					return itx.properties.magType !== mag;
			})],
	});

}

	componentDidUpdate() {//after ren
		localStorage.setItem('earthquakes', JSON.stringify(this.state.earthquakes));
	}

	render() {
    const {EQloaded} = this.state;
		if(!EQloaded) {
		return (
			<div className='wrapper'>

				<div className="container">
					<Header
            pageTitle={'Earthquakes Happened Here'}
            pageSubtitle={'Earthquakes page list subtitle'}

          />
					<div className="main-content">
						<div className='earth-loading'>
							<h2 className='text-center'>
								The Earthquakes are coming...</h2>
								<div className='loader' />
						</div>
					</div>
				</div>
			</div>
		);
		} //if

		else {
			return (
				<div className='wrapper'>

					<div className="container">
						<Header
              pageTitle={'Earthquakes Happened Here'}
              pageSubtitle={'Earthquakes page list subtitle'}
            />
						<div className="main-content">
							<div className="eq-list">
								<h1>Earthquakes list</h1>
								<div className="eq-input">

								  <SortByType
										earthquakes={this.state.earthquakes}
										options={this.state.options}
										handleSortByMagtype={this.handleSortByMagtype}
									/>

									<SortByMags
										handleSortByMag={this.handleSortByMag}
									/>

								</div>

								<EarthTable
									EQloaded={this.state.EQloaded}
									earthquakes={this.state.earthquakes}
								/>

							</div>
					  </div>

					</div>
			  </div>
			);
		} //else
	}
}

export default EarthquakesPage;
