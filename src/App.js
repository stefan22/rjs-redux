import React, { Component } from 'react';
import Header from './components/header/header';
import './scss/App.scss';

class App extends Component {
	render() {
		return (
      <div className='wrapper'>
			  <div className="container">
				<Header
          pageTitle={'Home page'}
          pageSubtitle={'home page dashboard'}
        />

				<div className="main-content">
					<h2>Main content</h2>


          <img className='carousel'
            src='./images/carousel.png'
            alt={'carousel here soon'}

          />

          <p className="text-left">
						Dolor primis viverra aenean fusce inceptos bibendum sagittis pretium aptent inceptos nulla
						facilisi. Laoreet molestie est faucibus dapibus in sed aptent quisque nulla. Lacinia, taciti
						vitae orci ante tincidunt in. Erat ac; convallis dignissim? Sollicitudin senectus, interdum
						imperdiet. Tortor urna gravida nisi libero neque tristique mauris inceptos amet ligula.
						Vulputate sociis eget at etiam inceptos quisque eleifend.
					</p>

					<h2>Heading</h2>
					<p className="text-left">
						Consequat lorem sollicitudin fames suscipit, tristique tempor egestas tortor nisl. Mollis
						hendrerit consectetur facilisis tincidunt ipsum ut ultricies pulvinar est convallis. Augue
						quisque varius praesent. Convallis lacinia nunc et cursus sit sagittis pellentesque purus
						viverra. Ridiculus ligula fusce natoque per neque metus natoque habitasse tincidunt tempus quam
						potenti! Nostra euismod tortor venenatis lorem laoreet lacinia ante congue potenti enim
						sollicitudin. Tincidunt, ac taciti felis et curabitur phasellus vestibulum commodo dictum
						adipiscing cursus. Netus vehicula eros.
					</p>
					<p className="text-left">
						Dolor primis viverra aenean fusce inceptos bibendum sagittis pretium aptent inceptos nulla
						facilisi. Laoreet molestie est faucibus dapibus in sed aptent quisque nulla. Lacinia, taciti
						vitae orci ante tincidunt in. Erat ac; convallis dignissim? Sollicitudin senectus, interdum
						imperdiet. Tortor urna gravida nisi libero neque tristique mauris inceptos amet ligula.
						Vulputate sociis eget at etiam inceptos quisque eleifend.
					</p>
				</div>
			</div>
      </div>
    );
	}
}

export default App;
