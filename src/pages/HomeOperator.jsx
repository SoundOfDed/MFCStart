import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import MyButton from '../components/UI/button/MyButton';
import Footer from '../components/Footer/Footer'

const HomeOperator = () => {
	return (
		<Fragment>
			<div className="wrapper">
				<div className='container'>

					<Header />
					<div className="main">
						<div className="home__btns">
							<MyButton path={'http://192.168.91.50/cpgu'}>АИС МФЦ</MyButton>
							<MyButton path={'http://10.92.146.44/help'}>ПК ПВД</MyButton>
							<MyButton path={'http://glpi.mfc92.ru/'} svg={<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="100%" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" space="preserve">
								<path fill="#E94A38" opacity="1.000000" stroke="none"
									d="
M173.000000,301.000000 
	C115.333344,301.000000 58.166687,301.000000 1.000023,301.000000 
	C1.000015,201.000031 1.000015,101.000053 1.000008,1.000063 
	C100.999947,1.000042 200.999893,1.000042 300.999878,1.000021 
	C300.999939,100.999939 300.999939,200.999878 300.999969,300.999908 
	C258.500000,301.000000 216.000000,301.000000 173.000000,301.000000 
M262.895355,265.015564 
	C272.431824,266.002472 281.295563,258.168640 281.222443,246.719223 
	C280.776489,176.908722 280.999725,107.093956 280.999542,37.280613 
	C280.999512,28.151239 273.845062,21.001566 264.696228,21.001337 
	C195.049500,20.999592 125.401642,21.190159 55.757416,20.772598 
	C46.514801,20.717182 37.104515,28.725023 37.027550,37.990021 
	C35.126568,38.326050 33.237770,38.826256 31.322399,38.968395 
	C24.646700,39.463802 18.016626,46.051388 18.014338,52.553200 
	C17.989016,124.492691 17.983992,196.432190 18.074429,268.371582 
	C18.076906,270.341156 18.862186,272.511688 19.874689,274.241913 
	C23.584406,280.581299 29.792881,282.916412 36.613743,282.928375 
	C105.222488,283.048676 173.831604,283.046082 242.440353,282.926300 
	C248.668457,282.915436 254.682587,281.075348 258.110779,275.245209 
	C259.922546,272.164032 260.761719,268.510956 262.895355,265.015564 
z"/>
								<path fill="#01A4F7" opacity="1.000000" stroke="none"
									d="
M37.863277,37.977119 
	C37.104515,28.725023 46.514801,20.717182 55.757416,20.772598 
	C125.401642,21.190159 195.049500,20.999592 264.696228,21.001337 
	C273.845062,21.001566 280.999512,28.151239 280.999542,37.280613 
	C280.999725,107.093956 280.776489,176.908722 281.222443,246.719223 
	C281.295563,258.168640 272.431824,266.002472 262.078918,264.890594 
	C258.988586,264.495087 256.714783,263.989716 254.440689,263.988251 
	C189.307739,263.945892 124.174782,263.955170 59.041817,263.953339 
	C44.496262,263.952911 38.760586,258.235168 38.760185,243.734909 
	C38.758362,177.602463 38.769081,111.470009 38.721722,45.337597 
	C38.719963,42.883900 38.162025,40.430603 37.863277,37.977119 
M144.647629,203.324341 
	C125.561485,213.178223 106.475365,223.032150 87.389145,232.885880 
	C85.913437,233.647751 84.254051,234.196472 83.032013,235.251831 
	C82.336868,235.852158 81.887352,237.446991 82.186974,238.287506 
	C82.480949,239.112183 83.829521,239.973984 84.777252,240.050354 
	C86.024963,240.150940 87.374542,239.611954 88.609100,239.155396 
	C101.266113,234.474518 114.064507,230.128632 126.512436,224.942734 
	C139.545868,219.512878 152.238770,213.265686 165.951584,207.215622 
	C167.935699,207.249664 169.920425,207.263092 171.903839,207.321030 
	C186.812576,207.756607 201.755478,209.031738 216.620285,208.416412 
	C232.504959,207.758850 230.119171,210.500504 230.442856,193.701736 
	C230.522476,189.569656 228.831345,188.184464 224.850998,188.101181 
	C216.901230,187.934830 208.959534,187.384430 201.372253,186.431015 
	C211.109680,177.640945 221.511612,169.459152 230.328842,159.826767 
	C235.407639,154.278458 239.032623,146.735870 241.338898,139.465088 
	C245.014038,127.878860 238.823608,118.225868 227.113266,114.994957 
	C224.409058,114.248856 221.555618,113.801987 218.752518,113.694321 
	C196.756683,112.849442 176.419174,119.759003 156.284912,127.417625 
	C155.141159,127.852699 154.582184,129.825150 153.751022,131.082062 
	C155.048553,131.873428 156.322235,133.295914 157.647766,133.345963 
	C163.131424,133.553055 168.662796,132.946320 174.116714,133.384521 
	C181.886398,134.008804 189.695755,134.845123 197.312744,136.432587 
	C203.020859,137.622238 204.505585,140.035950 202.641327,145.534500 
	C200.590668,151.582794 197.956146,157.780884 194.110931,162.788788 
	C188.785721,169.724167 182.092896,175.609467 175.214920,182.004974 
	C156.285538,176.556519 141.821930,166.184753 136.790268,146.044922 
	C129.806107,118.089935 142.038345,94.314949 169.107681,82.958466 
	C186.473648,75.672867 204.777481,73.670799 223.424759,73.933006 
	C233.256302,74.071236 233.061707,75.606689 233.002304,64.285660 
	C232.958725,55.980099 232.774689,55.164795 224.451675,55.291573 
	C208.159973,55.539726 191.778610,55.613701 175.618607,57.413868 
	C153.114349,59.920776 131.497528,66.037193 112.378853,78.959885 
	C83.999031,98.142357 78.748840,128.131790 86.714066,154.602753 
	C93.120964,175.894867 108.924278,188.378143 128.571777,196.723419 
	C134.045959,199.048599 139.710175,200.926300 144.647629,203.324341 
z"/>
								<path fill="#B1E2FC" opacity="1.000000" stroke="none"
									d="
M37.445412,37.983570 
	C38.162025,40.430603 38.719963,42.883900 38.721722,45.337597 
	C38.769081,111.470009 38.758362,177.602463 38.760185,243.734909 
	C38.760586,258.235168 44.496262,263.952911 59.041817,263.953339 
	C124.174782,263.955170 189.307739,263.945892 254.440689,263.988251 
	C256.714783,263.989716 258.988586,264.495087 261.651245,264.940857 
	C260.761719,268.510956 259.922546,272.164032 258.110779,275.245209 
	C254.682587,281.075348 248.668457,282.915436 242.440353,282.926300 
	C173.831604,283.046082 105.222488,283.048676 36.613743,282.928375 
	C29.792881,282.916412 23.584406,280.581299 19.874689,274.241913 
	C18.862186,272.511688 18.076906,270.341156 18.074429,268.371582 
	C17.983992,196.432190 17.989016,124.492691 18.014338,52.553200 
	C18.016626,46.051388 24.646700,39.463802 31.322399,38.968395 
	C33.237770,38.826256 35.126568,38.326050 37.445412,37.983570 
z"/>
								<path fill="#FCFEFF" opacity="1.000000" stroke="none"
									d="
M201.014496,186.992630 
	C208.959534,187.384430 216.901230,187.934830 224.850998,188.101181 
	C228.831345,188.184464 230.522476,189.569656 230.442856,193.701736 
	C230.119171,210.500504 232.504959,207.758850 216.620285,208.416412 
	C201.755478,209.031738 186.812576,207.756607 171.903839,207.321030 
	C169.920425,207.263092 167.935699,207.249664 165.226837,207.020172 
	C158.097122,205.552902 151.692169,204.281082 145.287216,203.009277 
	C139.710175,200.926300 134.045959,199.048599 128.571777,196.723419 
	C108.924278,188.378143 93.120964,175.894867 86.714066,154.602753 
	C78.748840,128.131790 83.999031,98.142357 112.378853,78.959885 
	C131.497528,66.037193 153.114349,59.920776 175.618607,57.413868 
	C191.778610,55.613701 208.159973,55.539726 224.451675,55.291573 
	C232.774689,55.164795 232.958725,55.980099 233.002304,64.285660 
	C233.061707,75.606689 233.256302,74.071236 223.424759,73.933006 
	C204.777481,73.670799 186.473648,75.672867 169.107681,82.958466 
	C142.038345,94.314949 129.806107,118.089935 136.790268,146.044922 
	C141.821930,166.184753 156.285538,176.556519 175.893433,182.203674 
	C184.719467,183.932465 192.866974,185.462555 201.014496,186.992630 
z"/>
								<path fill="#BAE4FC" opacity="1.000000" stroke="none"
									d="
M201.193375,186.711823 
	C192.866974,185.462555 184.719467,183.932465 176.278809,182.173401 
	C182.092896,175.609467 188.785721,169.724167 194.110931,162.788788 
	C197.956146,157.780884 200.590668,151.582794 202.641327,145.534500 
	C204.505585,140.035950 203.020859,137.622238 197.312744,136.432587 
	C189.695755,134.845123 181.886398,134.008804 174.116714,133.384521 
	C168.662796,132.946320 163.131424,133.553055 157.647766,133.345963 
	C156.322235,133.295914 155.048553,131.873428 153.751022,131.082062 
	C154.582184,129.825150 155.141159,127.852699 156.284912,127.417625 
	C176.419174,119.759003 196.756683,112.849442 218.752518,113.694321 
	C221.555618,113.801987 224.409058,114.248856 227.113266,114.994957 
	C238.823608,118.225868 245.014038,127.878860 241.338898,139.465088 
	C239.032623,146.735870 235.407639,154.278458 230.328842,159.826767 
	C221.511612,169.459152 211.109680,177.640945 201.193375,186.711823 
z"/>
								<path fill="#B7E3FC" opacity="1.000000" stroke="none"
									d="
M144.967422,203.166809 
	C151.692169,204.281082 158.097122,205.552902 164.791290,207.100220 
	C152.238770,213.265686 139.545868,219.512878 126.512436,224.942734 
	C114.064507,230.128632 101.266113,234.474518 88.609100,239.155396 
	C87.374542,239.611954 86.024963,240.150940 84.777252,240.050354 
	C83.829521,239.973984 82.480949,239.112183 82.186974,238.287506 
	C81.887352,237.446991 82.336868,235.852158 83.032013,235.251831 
	C84.254051,234.196472 85.913437,233.647751 87.389145,232.885880 
	C106.475365,223.032150 125.561485,213.178223 144.967422,203.166809 
z"/>
							</svg>}>GLPI - ЗАЯВКИ</MyButton>
							<MyButton path={'http://192.168.91.50/'}>ЭЛ. ОЧЕРЕДЬ</MyButton>
							<MyButton>POS</MyButton>
							<MyButton svg={<img src="/src/assets/welcome.png" />} path={'https://webim.armgs.team'}>АРМ ГС - ПОЧТА</MyButton>
							<MyButton>РОСРЕЕСТР</MyButton>
							<MyButton path={'https://esia.gosuslugi.ru/login/'}>ЕСИА</MyButton>
							<MyButton>Сбербанк</MyButton>
							<MyButton svg={<svg width="211" height="214" viewBox="0 0 211 214" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0)">
									<path d="M150.8 0.800049C183.937 0.800049 210.8 27.663 210.8 60.8001C210.8 91.8001 210.8 122.8 210.8 153.8C210.8 186.937 183.937 213.8 150.8 213.8C120.8 213.8 90.8 213.8 60.8 213.8C27.663 213.8 0.800049 186.937 0.800049 153.8C0.800049 122.819 0.800049 91.8191 0.800049 60.8001C0.800049 27.663 27.6631 0.800049 60.8002 0.800049C90.8449 0.800049 120.829 0.800049 150.8 0.800049ZM192.135 116.381C192.362 113.264 192.383 110.134 192.186 107.014C191.597 97.6698 191.23 89.0849 190.2 80.5C188.7 67 182.1 56.2 171.1 48.3C156.4 37.8 140.6 28.8001 124.2 21.2001C110.9 15.1001 97.4 14.9 84.5 21.8C69.1 30.2 54.0001 38.9001 39.2001 48.2001C27.4001 55.7001 21.1 67.2 19.4 81.1C17.3 98.4 17.6 115.7 18.8 133.1C19.9 149.6 27.1 162.6 40.8 172C55.2 181.9 70.2 190.8 86.2 198C98.5 203.5 110.9 203.6 123.2 198.2C140.5 190.6 156.6 180.8 172 169.9C181.5 163.1 187.8 153.7 189.7 142.2C191.04 133.491 191.538 124.571 192.135 116.381Z" fill="#0A2896" />
									<path d="M210.8 0.8C141 0.8 71.1 0.8 0.8 0.8C0.8 71.9 0.8 142.9 0.8 213.8C0.5 212.7 0.1 211.6 0.1 210.4C0 140.3 0 70.3 0 0C1.9 0 3.9 0 5.8 0C73 0 140.2 0 207.4 0C208.5 0 209.6 0.5 210.8 0.8Z" fill="#FEFEFE" />
									<path d="M192.5 111.7C191.7 121.1 191.3 131.7 189.6 142.2C187.7 153.7 181.4 163.1 171.9 169.9C156.6 180.9 140.5 190.7 123.1 198.2C110.8 203.6 98.4001 203.5 86.1001 198C70.1001 190.8 55.1001 181.9 40.7001 172C27.0001 162.6 19.9001 149.6 18.7001 133.1C17.5001 115.7 17.2001 98.3999 19.3001 81.0999C21.0001 67.1999 27.3001 55.6999 39.1001 48.1999C54.0001 38.8999 69.1001 30.1999 84.5001 21.9999C97.4001 15.0999 110.9 15.2999 124.2 21.3999C140.7 28.9999 156.4 37.8999 171.1 48.4999C182.1 56.3999 188.7 67.1999 190.2 80.6999C191.3 90.4999 191.7 100.5 192.5 111.7ZM28.5001 109.5C29.1001 118.5 29.3001 127.5 30.3001 136.4C31.4001 146.6 36.2001 155 44.4001 161C59.2001 171.7 74.8001 181 91.6001 188.3C100.8 192.3 110.1 192 119.2 187.9C135.3 180.7 150.3 171.6 164.7 161.5C173 155.7 178 147.7 179.4 137.7C181.8 119.8 181.3 101.8 179.6 83.8999C178.4 71.5999 172.8 61.9999 162.4 55.6999C148.8 47.3999 135 39.4999 120.9 31.9999C111 26.6999 100.6 26.7999 90.3001 31.4999C74.7001 38.5999 60.2001 47.4999 45.9001 56.9999C36.6001 62.9999 31.5001 71.7999 30.2001 82.5999C29.2001 91.4999 29.0001 100.5 28.5001 109.5Z" fill="#FAFBFC" />
									<path d="M28.5 109.5C29.1 100.5 29.3 91.4999 30.3 82.5999C31.5 71.7999 36.7 62.9999 45.9 56.8999C60 47.3999 74.5 38.4999 90.2 31.3999C100.6 26.6999 111 26.6999 120.8 31.8999C134.8 39.3999 148.7 47.3999 162.3 55.5999C172.7 61.8999 178.4 71.4999 179.5 83.7999C181.2 101.8 181.7 119.7 179.3 137.6C178 147.6 172.9 155.6 164.6 161.4C150.2 171.5 135.2 180.6 119.1 187.8C110 191.9 100.7 192.2 91.5 188.2C74.8 181 59.1 171.7 44.4 161C36.1 155 31.3 146.6 30.3 136.4C29.3 127.5 29 118.5 28.5 109.5ZM146.9 80.9999C141.3 74.9999 135.5 69.0999 129.5 63.4999C125.4 59.5999 119.7 59.8999 115.7 63.8999C107.8 71.6999 100 79.5999 92.1 87.4999C89.7 89.8999 89.7 92.2999 92.1 94.5999C100 102.5 108 110.5 115.9 118.4C118.3 120.8 120.6 120.9 123 118.5C130.7 110.9 138.5 103.3 146.1 95.4999C150.609 90.991 151.455 85.8231 146.9 80.9999ZM87.7 128.2C90.3 128.2 92.6 128.4 94.8 128.1C96.1 128 97.5 127.6 98.5 126.8C101.5 124.2 104.3 121.3 107.2 118.6C108.9 117.1 108.8 115.8 107.2 114.3C104.9 112.2 102.8 109.9 100.6 107.7C94.2 101.3 94.3 101.4 87.7 107.8C85.6 109.9 83.7 111.7 86.5 114.5C78.8 122.2 71.4 129.8 63.7 137.1C61 139.6 59.9 142.3 60 145.9C60.3 155.1 58.5 154.4 68.7 154.4C72.4 154.4 74.7 152.3 75.2 148.6C75.5 146.2 75.8 143.7 76.2 141.2C78.6 140.9 80.8 140.6 83 140.4C86.3 140.1 88.1 138.7 87.8 135.2C87.6 133.1 87.7 131 87.7 128.2Z" fill="#0A2996" />
									<path d="M146.2 95.5C138.6 103.3 130.8 110.8 123.1 118.5C120.7 120.9 118.3 120.8 116 118.4C108.1 110.4 100.1 102.5 92.1999 94.6C89.7999 92.2 89.7999 89.9 92.1999 87.5C100.1 79.6 107.8 71.7 115.8 63.9C119.8 59.9 125.5 59.6 129.6 63.5C135.6 69.1 141.4 75 147 81C151.44 85.7174 150.62 91.0796 146.2 95.5ZM130.4 87.7C130.4 84.1 127.2 81 123.7 81.1C120.2 81.2 117.3 84.1 117.2 87.6C117.1 91.2 120.2 94.4 123.7 94.4C127.3 94.4 130.4 91.3 130.4 87.7Z" fill="#FBFCFD" />
									<path d="M87.7 128.2C87.7 131 87.6 133.1 87.7 135.2C88 138.7 86.1001 140.2 82.9001 140.4C80.7001 140.6 78.5 140.9 76.1 141.2C75.8 143.7 75.4 146.2 75.1 148.6C74.6 152.2 72.3 154.4 68.6 154.4C58.4 154.4 60.2001 155.1 59.9001 145.9C59.8001 142.2 61 139.6 63.6 137.1C71.3 129.8 78.7001 122.2 86.4001 114.5C83.6001 111.7 85.5 109.9 87.6 107.8C94.2 101.4 94.1 101.3 100.5 107.7C102.7 109.9 104.8 112.2 107.1 114.3C108.7 115.8 108.8 117.1 107.1 118.6C104.2 121.3 101.4 124.2 98.4001 126.8C97.5001 127.6 96 128 94.7 128.1C92.6 128.3 90.4 128.2 87.7 128.2Z" fill="#FAFAFC" />
									<path d="M130.4 87.7C130.4 91.3 127.3 94.4 123.7 94.4C120.1 94.4 117 91.1 117.2 87.6C117.3 84.1 120.3 81.2 123.7 81.1C127.2 81 130.4 84.1 130.4 87.7Z" fill="#123099" />
								</g>
								<defs>
									<clipPath id="clip0">
										<rect width="210.8" height="213.8" rx="60" fill="white" />
									</clipPath>
								</defs>
							</svg>}>ГОСКЛЮЧ</MyButton>
							<MyButton>СЕВРЕЕСТР</MyButton>
							<MyButton>Старая почта</MyButton>

						</div>
					</div>
				</div>
				<Footer />
			</div>
		</Fragment>
	);
}

export default HomeOperator;
