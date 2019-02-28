// This isn't necessary but it keeps the editor from thinking L is a typo
/* global L */

var map = L.map('map').setView([40.730610,-73.935242], 13);

// Add base layer
L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

var dataLine = fetch('https://data.cityofnewyork.us/resource/s7zz-qmyz.geojson')
  .then(function (response) {
    // Read data as JSON
    return response.json();
  })

var dataStation = fetch('https://data.cityofnewyork.us/resource/kk4q-3rt2.geojson')
  .then(function (response) {
    // Read data as JSON
    return response.json();
  })



// Once both have loaded, do some work with them
Promise.all([dataLine, dataStation])
  .then(function (fetchedData) {
    console.log('Both datasets have loaded');
  
    // Unpack the data from the Promise
    var dataLine = fetchedData[0];
    var dataStation = fetchedData[1];
  
    // Add data in the order you want--first goes on the bottom
    L.geoJson(dataLine, {
      style: function (geoJsonFeature) {
        console.log(geoJsonFeature);
        // If the name of the station is X color with the official MTA color
        if (geoJsonFeature.properties.name === "1") { return {Color:'#EE352E'};}
        else if (geoJsonFeature.properties.name === "2") { return {Color:'#EE352E'};}
        else if (geoJsonFeature.properties.name === "3") { return {Color:'#EE352E'};}
        else if (geoJsonFeature.properties.name === "1-2-3") { return {Color:'#EE352E'};}
        else if (geoJsonFeature.properties.name === "2-3") { return {Color:'#EE352E'};}
        else if (geoJsonFeature.properties.name === "4") { return {Color:'#00933C'};}
        else if (geoJsonFeature.properties.name === "4-5") { return {Color:'#00933C'};}
        else if (geoJsonFeature.properties.name === "4-5-6") { return {Color:'#00933C'};}
        else if (geoJsonFeature.properties.name === "5") { return {Color:'#00933C'};}
        else if (geoJsonFeature.properties.name === "6") { return {Color:'#00933C'};}
        else if (geoJsonFeature.properties.name === "7") { return {Color:'#B933AD'};}
        else if (geoJsonFeature.properties.name === "A") { return {Color:'#0039A6'};}
        else if (geoJsonFeature.properties.name === "A-C") { return {Color:'#0039A6'};}
        else if (geoJsonFeature.properties.name === "A-C-E") { return {Color:'#0039A6'};}
        else if (geoJsonFeature.properties.name === "B") { return {Color:'#FF6319'};}
        else if (geoJsonFeature.properties.name === "B-D") { return {Color:'#FF6319'};}
        else if (geoJsonFeature.properties.name === "B-D-F-M") { return {Color:'#FF6319'};}
        else if (geoJsonFeature.properties.name === "D") { return {Color:'#FF6319'};}
        else if (geoJsonFeature.properties.name === "E") { return {Color:'#0039A6'};}
        else if (geoJsonFeature.properties.name === "F") { return {Color:'#FF6319'};}
        else if (geoJsonFeature.properties.name === "F-M") { return {Color:'#FF6319'};}
        else if (geoJsonFeature.properties.name === "G") { return {Color:'#6CBE45'};}
        else if (geoJsonFeature.properties.name === "J-Z") { return {Color:'#996633'};}
        else if (geoJsonFeature.properties.name === "L") { return {Color:'#A7A9AC'};}
        else if (geoJsonFeature.properties.name === "M") { return {Color:'#FF6319'};}
        else if (geoJsonFeature.properties.name === "N") { return {Color:'#FCCC0A'};}
        else if (geoJsonFeature.properties.name === "N-Q") { return {Color:'#FCCC0A'};}
        else if (geoJsonFeature.properties.name === "N-Q-R") { return {Color:'#FCCC0A'};}
        else if (geoJsonFeature.properties.name === "N-Q-R-W") { return {Color:'#FCCC0A'};}
        else if (geoJsonFeature.properties.name === "N-R") { return {Color:'#FCCC0A'};}
        else if (geoJsonFeature.properties.name === "N-W") { return {Color:'#FCCC0A'};}
        else if (geoJsonFeature.properties.name === "Q") { return {Color:'#FCCC0A'};}
        else if (geoJsonFeature.properties.name === "R") { return {Color:'#FCCC0A'};}
        else if (geoJsonFeature.properties.name === "R-W") { return {Color:'#FCCC0A'};}
        else if (geoJsonFeature.properties.name === "S") { return {Color:'#808183'};}                                                 
    }}).addTo(map);
  
//   Add Station
    L.geoJson(dataStation, {      
      // Style
      style: function (geoJsonFeature) {
        console.log(geoJsonFeature);
        // If status is Closed, change color to red
        if (geoJsonFeature.properties.name === '') {
          return {
            fillColor: 'magenta',
            fillOpacity: 1.0,
            radius: 6,
            stroke: false
          };
        }
        else {
          // Else return the default style
          return {
            fillColor: 'cyan',
            fillOpacity: 1.0,
            radius: 6,
            stroke: false
          };
        }
      }
      
    }
    ).addTo(map);
  
  });


//  Dropdown Control
function zoomToStation(station) {
  if (station === "103rd St") {map.zoomTo([40799446,-73968379], 16);}
  else if (station === "103rd St") {map.zoomTo([407906,-73947478], 16);}
  else if (station === "103rd St") {map.zoomTo([4079606074,-7396137008], 16);}
  else if (station === "103rd St - Corona Plaza") {map.zoomTo([40749865,-738627], 16);}
  else if (station === "104th St") {map.zoomTo([40681711,-73837683], 16);}
  else if (station === "104th-102nd Sts") {map.zoomTo([40695166,-73844435], 16);}
  else if (station === "110th St") {map.zoomTo([4079502,-7394425], 16);}
  else if (station === "111th St") {map.zoomTo([4075173,-73855334], 16);}
  else if (station === "111th St") {map.zoomTo([40684331,-73832163], 16);}
  else if (station === "111th St") {map.zoomTo([4069711481,-7383679338], 16);}
  else if (station === "116th St") {map.zoomTo([40802098,-73949625], 16);}
  else if (station === "116th St") {map.zoomTo([40798629,-73941617], 16);}
  else if (station === "116th St") {map.zoomTo([4080505813,-7395479778], 16);}
  else if (station === "116th St - Columbia University") {map.zoomTo([40807722,-7396411], 16);}
  else if (station === "121st St") {map.zoomTo([40700482,-73828349], 16);}
  else if (station === "125th St") {map.zoomTo([40815581,-73958372], 16);}
  else if (station === "125th St") {map.zoomTo([40807754,-73945495], 16);}
  else if (station === "125th St") {map.zoomTo([40804138,-73937594], 16);}
  else if (station === "125th St") {map.zoomTo([4081107167,-73952248], 16);}
  else if (station === "135th St") {map.zoomTo([40814229,-7394077], 16);}
  else if (station === "135th St") {map.zoomTo([4081790556,-7394753481], 16);}
  else if (station === "137th St - City College") {map.zoomTo([40822008,-73953676], 16);}
  else if (station === "138th St - Grand Concourse") {map.zoomTo([40813224,-73929849], 16);}
  else if (station === "145th St") {map.zoomTo([40826551,-7395036], 16);}
  else if (station === "145th St") {map.zoomTo([40820421,-73936245], 16);}
  else if (station === "145th St") {map.zoomTo([4082476636,-7394408793], 16);}
  else if (station === "149th St - Grand Concourse") {map.zoomTo([4081830344,-7392738475], 16);}
  else if (station === "149th St - Grand Concourse") {map.zoomTo([4081833014,-7392672247], 16);}
  else if (station === "14th St") {map.zoomTo([40737826,-74000201], 16);}
  else if (station === "14th St") {map.zoomTo([40740893,-7400169], 16);}
  else if (station === "14th St") {map.zoomTo([40738228,-73996209], 16);}
  else if (station === "155th St") {map.zoomTo([40830518,-73941514], 16);}
  else if (station === "155th St") {map.zoomTo([40830135,-73938209], 16);}
  else if (station === "157th St") {map.zoomTo([40834041,-7394489], 16);}
  else if (station === "15th St - Prospect Park") {map.zoomTo([4066003569,-7397973581], 16);}
  else if (station === "161st St - Yankee Stadium") {map.zoomTo([4082823033,-73925692], 16);}
  else if (station === "161st St - Yankee Stadium") {map.zoomTo([40827905,-73925651], 16);}
  else if (station === "163rd St - Amsterdam Av") {map.zoomTo([40836013,-73939892], 16);}
  else if (station === "167th St") {map.zoomTo([40835537,-739214], 16);}
  else if (station === "167th St") {map.zoomTo([40833769,-73918432], 16);}
  else if (station === "168th St") {map.zoomTo([40840556,-73940133], 16);}
  else if (station === "168th St") {map.zoomTo([40840719,-73939561], 16);}
  else if (station === "169th St") {map.zoomTo([407105175,-737934742], 16);}
  else if (station === "170th St") {map.zoomTo([40840075,-73917791], 16);}
  else if (station === "170th St") {map.zoomTo([40839306,-739134], 16);}
  else if (station === "174th St") {map.zoomTo([4083719555,-738876936], 16);}
  else if (station === "174th-175th Sts") {map.zoomTo([408459,-73910136], 16);}
  else if (station === "175th St") {map.zoomTo([40847391,-73939704], 16);}
  else if (station === "176th St") {map.zoomTo([4084848,-73911794], 16);}
  else if (station === "181st St") {map.zoomTo([40849505,-73933596], 16);}
  else if (station === "181st St") {map.zoomTo([40851695,-73937969], 16);}
  else if (station === "182nd-183rd Sts") {map.zoomTo([40856093,-73900741], 16);}
  else if (station === "183rd St") {map.zoomTo([40858407,-73903879], 16);}
  else if (station === "18th Ave") {map.zoomTo([4060773573,-7400159259], 16);}
  else if (station === "18th Ave") {map.zoomTo([4062975467,-73976971], 16);}
  else if (station === "18th Ave") {map.zoomTo([40620687,-73990454], 16);}
  else if (station === "18th St") {map.zoomTo([4074104,-73997871], 16);}
  else if (station === "190th St") {map.zoomTo([40859022,-7393418], 16);}
  else if (station === "191st St") {map.zoomTo([40855225,-73929412], 16);}
  else if (station === "1st Ave") {map.zoomTo([4073097498,-7398168087], 16);}
  else if (station === "207th St") {map.zoomTo([40864614,-73918819], 16);}
  else if (station === "20th Ave") {map.zoomTo([40604677,-7399817432], 16);}
  else if (station === "20th Ave") {map.zoomTo([40617109,-73984522], 16);}
  else if (station === "215th St") {map.zoomTo([40869444,-73915279], 16);}
  else if (station === "219th St") {map.zoomTo([4088388797,-7386250971], 16);}
  else if (station === "21st St") {map.zoomTo([4074412867,-739496], 16);}
  else if (station === "21st St - Queensbridge") {map.zoomTo([4075373927,-7394193761], 16);}
  else if (station === "225th St") {map.zoomTo([4088802826,-7386021462], 16);}
  else if (station === "231st St") {map.zoomTo([40878856,-73904834], 16);}
  else if (station === "233rd St") {map.zoomTo([4089314324,-738573624], 16);}
  else if (station === "238th St") {map.zoomTo([40884667,-7390087], 16);}
  else if (station === "23rd St") {map.zoomTo([40744081,-73995657], 16);}
  else if (station === "23rd St") {map.zoomTo([40739864,-73986599], 16);}
  else if (station === "23rd St") {map.zoomTo([40745906,-73998041], 16);}
  else if (station === "23rd St") {map.zoomTo([4074295432,-73992765], 16);}
  else if (station === "23rd St") {map.zoomTo([4074130267,-73989344], 16);}
  else if (station === "25th Ave") {map.zoomTo([4059770367,-73986829], 16);}
  else if (station === "25th St") {map.zoomTo([4066039667,-73998091], 16);}
  else if (station === "28th St") {map.zoomTo([40747215,-73993365], 16);}
  else if (station === "28th St") {map.zoomTo([4074307,-73984264], 16);}
  else if (station === "28th St") {map.zoomTo([40745454,-73988698], 16);}
  else if (station === "30th Ave") {map.zoomTo([4076677867,-73921479], 16);}
  else if (station === "33rd St") {map.zoomTo([40744587,-73930997], 16);}
  else if (station === "33rd St") {map.zoomTo([40746081,-73982076], 16);}
  else if (station === "34th St - Hudson Yards") {map.zoomTo([4075544636,-7400219709], 16);}
  else if (station === "34th St - Penn Station") {map.zoomTo([40750373,-73991057], 16);}
  else if (station === "34th St - Penn Station") {map.zoomTo([40752287,-73993391], 16);}
  else if (station === "36th Ave") {map.zoomTo([40756442,-73929862], 16);}
  else if (station === "36th St") {map.zoomTo([4065514367,-74003549], 16);}
  else if (station === "36th St") {map.zoomTo([4075196004,-7392901818], 16);}
  else if (station === "39th Ave") {map.zoomTo([4075276306,-7393285138], 16);}
  else if (station === "3rd Ave") {map.zoomTo([40732691,-7398575], 16);}
  else if (station === "3rd Ave - 138th St") {map.zoomTo([40810476,-73926138], 16);}
  else if (station === "3rd Ave - 149th St") {map.zoomTo([4081602925,-7391779153], 16);}
  else if (station === "40th St") {map.zoomTo([40743781,-73924016], 16);}
  else if (station === "42nd St - Bryant Pk") {map.zoomTo([40754184,-73984591], 16);}
  else if (station === "42nd St - Port Authority Bus Term") {map.zoomTo([40757308,-73989735], 16);}
  else if (station === "45th St") {map.zoomTo([4064893867,-74010006], 16);}
  else if (station === "46th St") {map.zoomTo([40743132,-73918435], 16);}
  else if (station === "46th St") {map.zoomTo([4075631695,-7391352175], 16);}
  else if (station === "47th-50th Sts - Rockefeller Ctr") {map.zoomTo([40758641,-73981331], 16);}
  else if (station === "49th St") {map.zoomTo([4075980197,-7398420957], 16);}
  else if (station === "4th Av - 9th St") {map.zoomTo([4067084667,-73988302], 16);}
  else if (station === "4th Av - 9th St") {map.zoomTo([4067027167,-73989779], 16);}
  else if (station === "50th St") {map.zoomTo([40761728,-73983849], 16);}
  else if (station === "50th St") {map.zoomTo([40762456,-73985984], 16);}
  else if (station === "50th St") {map.zoomTo([4063626089,-7399465878], 16);}
  else if (station === "51st St") {map.zoomTo([40757107,-7397192], 16);}
  else if (station === "52nd St") {map.zoomTo([40744149,-73912549], 16);}
  else if (station === "53rd St") {map.zoomTo([4064506867,-74014034], 16);}
  else if (station === "55th St") {map.zoomTo([4063147876,-7399534883], 16);}
  else if (station === "57th St") {map.zoomTo([40764085,-73977368], 16);}
  else if (station === "57th St") {map.zoomTo([4076456553,-7398072973], 16);}
  else if (station === "59th St") {map.zoomTo([4064136167,-74017881], 16);}
  else if (station === "59th St - Columbus Circle") {map.zoomTo([40768247,-73981929], 16);}
  else if (station === "59th St - Columbus Circle") {map.zoomTo([4076824953,-7398164872], 16);}
  else if (station === "5th Ave - 53rd St") {map.zoomTo([4076008683,-7397524851], 16);}
  else if (station === "5th Ave - 59th St") {map.zoomTo([40764811,-73973347], 16);}
  else if (station === "5th Ave - Bryant Pk") {map.zoomTo([40753821,-73981963], 16);}
  else if (station === "62nd St") {map.zoomTo([4062622446,-7399685725], 16);}
  else if (station === "63rd Dr - Rego Park") {map.zoomTo([4072976397,-738616182], 16);}
  else if (station === "65th St") {map.zoomTo([4074971953,-7389878838], 16);}
  else if (station === "66th St - Lincoln Ctr") {map.zoomTo([4077344,-73982209], 16);}
  else if (station === "67th Ave") {map.zoomTo([4072650548,-7385286048], 16);}
  else if (station === "68th St - Hunter College") {map.zoomTo([40768141,-7396387], 16);}
  else if (station === "69th St") {map.zoomTo([40746325,-73896403], 16);}
  else if (station === "6th Ave") {map.zoomTo([4073774147,-7399775079], 16);}
  else if (station === "71st St") {map.zoomTo([4061925871,-7399884095], 16);}
  else if (station === "72nd St") {map.zoomTo([40778453,-7398197], 16);}
  else if (station === "72nd St") {map.zoomTo([407755194,-7397633658], 16);}
  else if (station === "72nd St") {map.zoomTo([4076880251,-7395836179], 16);}
  else if (station === "74th St - Broadway") {map.zoomTo([4074686757,-7389120513], 16);}
  else if (station === "75th Ave") {map.zoomTo([4071804465,-7383692369], 16);}
  else if (station === "75th St - Eldert Ln") {map.zoomTo([4069129,-73867288], 16);}
  else if (station === "77th St") {map.zoomTo([4077362,-73959874], 16);}
  else if (station === "77th St") {map.zoomTo([4062974167,-7402551], 16);}
  else if (station === "79th St") {map.zoomTo([40783934,-73979917], 16);}
  else if (station === "79th St") {map.zoomTo([4061315893,-7400058287], 16);}
  else if (station === "7th Ave") {map.zoomTo([4076297015,-7398169782], 16);}
  else if (station === "7th Ave") {map.zoomTo([4067710218,-7397285279], 16);}
  else if (station === "7th Ave") {map.zoomTo([4066624469,-7398025118], 16);}
  else if (station === "80th St") {map.zoomTo([40679371,-73858992], 16);}
  else if (station === "81st St") {map.zoomTo([4078134608,-7397209795], 16);}
  else if (station === "82nd St - Jackson Hts") {map.zoomTo([40747659,-73883697], 16);}
  else if (station === "85th St - Forest Pky") {map.zoomTo([40692427,-73860087], 16);}
  else if (station === "86th St") {map.zoomTo([40788644,-73976218], 16);}
  else if (station === "86th St") {map.zoomTo([40779492,-73955589], 16);}
  else if (station === "86th St") {map.zoomTo([4078582305,-7396882849], 16);}
  else if (station === "86th St") {map.zoomTo([4077786104,-7395177091], 16);}
  else if (station === "86th St") {map.zoomTo([4062268667,-74028398], 16);}
  else if (station === "88th St") {map.zoomTo([40679843,-7385147], 16);}
  else if (station === "8th Ave") {map.zoomTo([4073977667,-74002578], 16);}
  else if (station === "8th Ave") {map.zoomTo([40634971,-74011516], 16);}
  else if (station === "8th St - NYU") {map.zoomTo([40730465,-73992508], 16);}
  else if (station === "90th St - Elmhurst Av") {map.zoomTo([40748408,-73876613], 16);}
  else if (station === "96th St") {map.zoomTo([40793919,-73972323], 16);}
  else if (station === "96th St") {map.zoomTo([40785672,-7395107], 16);}
  else if (station === "96th St") {map.zoomTo([407916188,-7396460246], 16);}
  else if (station === "96th St") {map.zoomTo([4078423665,-7394706602], 16);}
  else if (station === "9th Ave") {map.zoomTo([4064648408,-7399444874], 16);}
  else if (station === "Alabama Ave") {map.zoomTo([40676998,-73898526], 16);}
  else if (station === "Allerton Ave") {map.zoomTo([4086548338,-7386723423], 16);}
  else if (station === "Aqueduct - North Conduit Av") {map.zoomTo([40668234,-73834058], 16);}
  else if (station === "Aqueduct Racetrack") {map.zoomTo([40672097,-73835919], 16);}
  else if (station === "Astor Pl") {map.zoomTo([40730054,-7399107], 16);}
  else if (station === "Astoria - Ditmars Blvd") {map.zoomTo([4077503567,-73912034], 16);}
  else if (station === "Astoria Blvd") {map.zoomTo([40770037,-73918095], 16);}
  else if (station === "Atlantic Av - Barclay's Center") {map.zoomTo([4068442017,-7397754994], 16);}
  else if (station === "Atlantic Av - Barclay's Center") {map.zoomTo([4068448832,-7397678344], 16);}
  else if (station === "Atlantic Av - Barclay's Center") {map.zoomTo([4068366567,-7397881], 16);}
  else if (station === "Atlantic Ave") {map.zoomTo([4067534467,-73903097], 16);}
  else if (station === "Ave H") {map.zoomTo([4062920838,-7396151794], 16);}
  else if (station === "Ave I") {map.zoomTo([4062501744,-7397606933], 16);}
  else if (station === "Ave J") {map.zoomTo([4062502282,-7396069316], 16);}
  else if (station === "Ave M") {map.zoomTo([4061739774,-7395924311], 16);}
  else if (station === "Ave N") {map.zoomTo([4061435671,-7397404851], 16);}
  else if (station === "Ave P") {map.zoomTo([4060884281,-7397300282], 16);}
  else if (station === "Ave U") {map.zoomTo([4059592483,-7397337642], 16);}
  else if (station === "Ave U") {map.zoomTo([40597236,-73979084], 16);}
  else if (station === "Ave U") {map.zoomTo([4059930895,-7395581122], 16);}
  else if (station === "Ave X") {map.zoomTo([4058944967,-73974266], 16);}
  else if (station === "Bay 50th St") {map.zoomTo([4058884067,-73983765], 16);}
  else if (station === "Bay Pky") {map.zoomTo([4060195046,-739936762], 16);}
  else if (station === "Bay Pky") {map.zoomTo([4062073162,-7397525698], 16);}
  else if (station === "Bay Pky") {map.zoomTo([4061145579,-7398178001], 16);}
  else if (station === "Bay Ridge - 95th St") {map.zoomTo([4061662167,-74030876], 16);}
  else if (station === "Bay Ridge Ave") {map.zoomTo([4063496667,-74023377], 16);}
  else if (station === "Baychester Ave") {map.zoomTo([40878663,-73838591], 16);}
  else if (station === "Beach 105th St") {map.zoomTo([4058326844,-7382758075], 16);}
  else if (station === "Beach 25th St") {map.zoomTo([40600066,-73761353], 16);}
  else if (station === "Beach 36th St") {map.zoomTo([40595398,-73768175], 16);}
  else if (station === "Beach 44th St") {map.zoomTo([40592943,-73776013], 16);}
  else if (station === "Beach 60th St") {map.zoomTo([40592374,-73788522], 16);}
  else if (station === "Beach 67th St") {map.zoomTo([40590927,-73796924], 16);}
  else if (station === "Beach 90th St") {map.zoomTo([4058809156,-738136514], 16);}
  else if (station === "Beach 98th St") {map.zoomTo([4058538569,-7382052059], 16);}
  else if (station === "Bedford - Nostrand Aves") {map.zoomTo([40689627,-73953522], 16);}
  else if (station === "Bedford Ave") {map.zoomTo([40717174,-73956665], 16);}
  else if (station === "Bedford Park Blvd") {map.zoomTo([40873244,-73887138], 16);}
  else if (station === "Bedford Park Blvd - Lehman College") {map.zoomTo([40873412,-73890064], 16);}
  else if (station === "Bergen St") {map.zoomTo([4068086214,-7397499915], 16);}
  else if (station === "Bergen St") {map.zoomTo([4068611055,-739907565], 16);}
  else if (station === "Beverly Rd") {map.zoomTo([4064512352,-7394884798], 16);}
  else if (station === "Beverly Rd") {map.zoomTo([406439046,-739643578], 16);}
  else if (station === "Bleecker St") {map.zoomTo([4072591467,-73994659], 16);}
  else if (station === "Borough Hall") {map.zoomTo([40693219,-73989998], 16);}
  else if (station === "Borough Hall") {map.zoomTo([40692404,-73990151], 16);}
  else if (station === "Botanic Garden") {map.zoomTo([4067034267,-73959245], 16);}
  else if (station === "Bowery") {map.zoomTo([4072024688,-7399380691], 16);}
  else if (station === "Bowling Green") {map.zoomTo([40704914,-74014008], 16);}
  else if (station === "Briarwood - Van Wyck Blvd") {map.zoomTo([4070916182,-7382069264], 16);}
  else if (station === "Brighton Beach") {map.zoomTo([405777102,-7396135379], 16);}
  else if (station === "Broad Channel") {map.zoomTo([4060840218,-7381583269], 16);}
  else if (station === "Broad St") {map.zoomTo([40706476,-74011056], 16);}
  else if (station === "Broadway") {map.zoomTo([4070612658,-7395031226], 16);}
  else if (station === "Broadway") {map.zoomTo([40761432,-73925823], 16);}
  else if (station === "Broadway - Lafayette St") {map.zoomTo([40725297,-73996204], 16);}
  else if (station === "Broadway Junction") {map.zoomTo([4067833367,-73905316], 16);}
  else if (station === "Broadway Junction") {map.zoomTo([40679366,-7390429], 16);}
  else if (station === "Broadway Junction") {map.zoomTo([4067845625,-7390311758], 16);}
  else if (station === "Bronx Park East") {map.zoomTo([4084876867,-7386835609], 16);}
  else if (station === "Brook Ave") {map.zoomTo([40807566,-7391924], 16);}
  else if (station === "Brooklyn Bridge - City Hall") {map.zoomTo([40713065,-74004131], 16);}
  else if (station === "Brooklyn College - Flatbush Ave") {map.zoomTo([4063284241,-7394754121], 16);}
  else if (station === "Buhre Ave") {map.zoomTo([4084681,-73832569], 16);}
  else if (station === "Burke Ave") {map.zoomTo([408712588,-7386705362], 16);}
  else if (station === "Burnside Ave") {map.zoomTo([40853453,-73907684], 16);}
  else if (station === "Bushwick - Aberdeen") {map.zoomTo([4068286063,-7390526176], 16);}
  else if (station === "Canal St") {map.zoomTo([40722854,-74006277], 16);}
  else if (station === "Canal St") {map.zoomTo([40718803,-74000193], 16);}
  else if (station === "Canal St") {map.zoomTo([4071817388,-7399982639], 16);}
  else if (station === "Canal St") {map.zoomTo([4071881426,-7400105471], 16);}
  else if (station === "Canal St") {map.zoomTo([40719465,-74001826], 16);}
  else if (station === "Canal St - Holland Tunnel") {map.zoomTo([40720824,-74005229], 16);}
  else if (station === "Canarsie - Rockaway Pkwy") {map.zoomTo([4064665367,-7390185], 16);}
  else if (station === "Carroll St") {map.zoomTo([4068027335,-7399494698], 16);}
  else if (station === "Castle Hill Ave") {map.zoomTo([40834255,-73851222], 16);}
  else if (station === "Cathedral Pkwy (110th St)") {map.zoomTo([40803967,-73966847], 16);}
  else if (station === "Cathedral Pkwy (110th St)") {map.zoomTo([4080058156,-7395806671], 16);}
  else if (station === "Central Ave") {map.zoomTo([40697873,-73927243], 16);}
  else if (station === "Central Park North (110th St)") {map.zoomTo([40799075,-73951822], 16);}
  else if (station === "Chambers St") {map.zoomTo([40715478,-74009266], 16);}
  else if (station === "Chambers St") {map.zoomTo([40714111,-7400858474], 16);}
  else if (station === "Chambers St") {map.zoomTo([4071323379,-7400340673], 16);}
  else if (station === "Chauncey St") {map.zoomTo([406828513,-7391038357], 16);}
  else if (station === "Christopher St - Sheridan Sq") {map.zoomTo([40733422,-74002906], 16);}
  else if (station === "Church Ave") {map.zoomTo([4065086069,-7394945514], 16);}
  else if (station === "Church Ave") {map.zoomTo([4065049325,-7396288246], 16);}
  else if (station === "Church Ave") {map.zoomTo([40644272,-7397972116], 16);}
  else if (station === "City Hall") {map.zoomTo([4071327233,-7400698582], 16);}
  else if (station === "Clark St") {map.zoomTo([40697466,-73993086], 16);}
  else if (station === "Classon Ave") {map.zoomTo([40688889,-7395999], 16);}
  else if (station === "Cleveland St") {map.zoomTo([40679778,-73885194], 16);}
  else if (station === "Clinton - Washington Aves") {map.zoomTo([40683263,-73965838], 16);}
  else if (station === "Clinton - Washington Aves") {map.zoomTo([40688094,-73966796], 16);}
  else if (station === "Coney Island - Stillwell Av") {map.zoomTo([40577281,-73981236], 16);}
  else if (station === "Cortelyou Rd") {map.zoomTo([4064094017,-7396379006], 16);}
  else if (station === "Cortlandt St") {map.zoomTo([40711835,-74012188], 16);}
  else if (station === "Cortlandt St") {map.zoomTo([4071051298,-7401113196], 16);}
  else if (station === "Court Sq") {map.zoomTo([40747023,-73945264], 16);}
  else if (station === "Court Sq - 23rd St") {map.zoomTo([4074776812,-739460547], 16);}
  else if (station === "Court St") {map.zoomTo([4069419648,-7399181831], 16);}
  else if (station === "Crescent St") {map.zoomTo([4068315266,-7387392925], 16);}
  else if (station === "Crown Hts - Utica Ave") {map.zoomTo([4066897831,-7393293256], 16);}
  else if (station === "Cypress Ave") {map.zoomTo([40805368,-73914042], 16);}
  else if (station === "Cypress Hills") {map.zoomTo([40689616,-73873322], 16);}
  else if (station === "DeKalb Ave") {map.zoomTo([4069064812,-7398177094], 16);}
  else if (station === "DeKalb Ave") {map.zoomTo([40703693,-73918232], 16);}
  else if (station === "Delancey St - Essex St") {map.zoomTo([4071868074,-7398807807], 16);}
  else if (station === "Delancey St - Essex St") {map.zoomTo([4071830606,-739874094], 16);}
  else if (station === "Ditmas Ave") {map.zoomTo([4063611867,-73978172], 16);}
  else if (station === "Dyckman St") {map.zoomTo([40860531,-73925536], 16);}
  else if (station === "Dyckman St") {map.zoomTo([40865491,-73927271], 16);}
  else if (station === "E 105th St") {map.zoomTo([4065046879,-7389954769], 16);}
  else if (station === "E 143rd St - St Mary's St") {map.zoomTo([40808719,-73907657], 16);}
  else if (station === "E 149th St") {map.zoomTo([40812118,-73904098], 16);}
  else if (station === "E 180th St") {map.zoomTo([4084186304,-738733461], 16);}
  else if (station === "East Broadway") {map.zoomTo([40713855,-73990177], 16);}
  else if (station === "Eastchester - Dyre Ave") {map.zoomTo([408883,-73830834], 16);}
  else if (station === "Eastern Pkwy - Bklyn Museum") {map.zoomTo([4067203224,-7396422204], 16);}
  else if (station === "Elder Ave") {map.zoomTo([40828584,-73879159], 16);}
  else if (station === "Elmhurst Ave") {map.zoomTo([4074237008,-7388203475], 16);}
  else if (station === "Euclid Ave") {map.zoomTo([40675377,-73872106], 16);}
  else if (station === "Far Rockaway - Mott Ave") {map.zoomTo([40603995,-73755405], 16);}
  else if (station === "Flushing - Main St") {map.zoomTo([407596,-7383003], 16);}
  else if (station === "Flushing Ave") {map.zoomTo([4070037667,-73950234], 16);}
  else if (station === "Flushing Ave") {map.zoomTo([407004044,-7394137735], 16);}
  else if (station === "Fordham Rd") {map.zoomTo([40862803,-73901034], 16);}
  else if (station === "Fordham Rd") {map.zoomTo([40861296,-73897749], 16);}
  else if (station === "Forest Ave") {map.zoomTo([40704412,-73903075], 16);}
  else if (station === "Forest Hills - 71st Av") {map.zoomTo([4072159431,-7384451672], 16);}
  else if (station === "Franklin Ave") {map.zoomTo([4067076515,-7395809974], 16);}
  else if (station === "Franklin Ave") {map.zoomTo([4068137967,-73956848], 16);}
  else if (station === "Franklin Ave - Fulton St") {map.zoomTo([4068059567,-73955827], 16);}
  else if (station === "Franklin St") {map.zoomTo([40719318,-74006886], 16);}
  else if (station === "Freeman St") {map.zoomTo([4082998745,-7389175225], 16);}
  else if (station === "Fresh Pond Rd") {map.zoomTo([40706226,-73895898], 16);}
  else if (station === "Ft Hamilton Pkwy") {map.zoomTo([4064091271,-7399420224], 16);}
  else if (station === "Ft Hamilton Pkwy") {map.zoomTo([4065078167,-73975776], 16);}
  else if (station === "Ft Hamilton Pkwy") {map.zoomTo([4063138567,-74005351], 16);}
  else if (station === "Fulton St") {map.zoomTo([40709416,-74006571], 16);}
  else if (station === "Fulton St") {map.zoomTo([40710368,-74009509], 16);}
  else if (station === "Fulton St") {map.zoomTo([4071016217,-7400762309], 16);}
  else if (station === "Fulton St") {map.zoomTo([40687119,-73975375], 16);}
  else if (station === "Fulton St") {map.zoomTo([4071002267,-74007938], 16);}
  else if (station === "Gates Ave") {map.zoomTo([40689584,-73922156], 16);}
  else if (station === "Graham Ave") {map.zoomTo([40714576,-73943944], 16);}
  else if (station === "Grand Army Plaza") {map.zoomTo([406752947,-7397095633], 16);}
  else if (station === "Grand Ave - Newtown") {map.zoomTo([4073681342,-7387722086], 16);}
  else if (station === "Grand Central - 42nd St") {map.zoomTo([4075180743,-739767133], 16);}
  else if (station === "Grand Central - 42nd St") {map.zoomTo([40751431,-73976041], 16);}
  else if (station === "Grand Central - 42nd St") {map.zoomTo([4075276867,-73979189], 16);}
  else if (station === "Grand St") {map.zoomTo([40718267,-73993753], 16);}
  else if (station === "Grand St") {map.zoomTo([40711576,-73940497], 16);}
  else if (station === "Grant Ave") {map.zoomTo([40677044,-7386505], 16);}
  else if (station === "Gravesend - 86th St") {map.zoomTo([40592465,-73978189], 16);}
  else if (station === "Greenpoint Ave") {map.zoomTo([40731267,-73954425], 16);}
  else if (station === "Gun Hill Rd") {map.zoomTo([40869526,-73846384], 16);}
  else if (station === "Gun Hill Rd") {map.zoomTo([4087783939,-7386613411], 16);}
  else if (station === "Halsey St") {map.zoomTo([4068641527,-7391663888], 16);}
  else if (station === "Halsey St") {map.zoomTo([40695518,-73903934], 16);}
  else if (station === "Harlem - 148 St") {map.zoomTo([4082388,-7393647], 16);}
  else if (station === "Herald Sq - 34th St") {map.zoomTo([407497894,-7398777189], 16);}
  else if (station === "Herald Sq - 34th St") {map.zoomTo([4074964456,-7398793683], 16);}
  else if (station === "Hewes St") {map.zoomTo([4070689,-73953488], 16);}
  else if (station === "High St") {map.zoomTo([40699337,-73990531], 16);}
  else if (station === "Houston St") {map.zoomTo([40728251,-74005367], 16);}
  else if (station === "Howard Beach - JFK Airport") {map.zoomTo([40660476,-73830301], 16);}
  else if (station === "Hoyt - Schermerhorn Sts") {map.zoomTo([4068840848,-7398503624], 16);}
  else if (station === "Hoyt St") {map.zoomTo([4069054419,-739850638], 16);}
  else if (station === "Hunters Point Ave") {map.zoomTo([40742216,-73948916], 16);}
  else if (station === "Hunts Point Ave") {map.zoomTo([40820948,-73890549], 16);}
  else if (station === "Intervale Ave") {map.zoomTo([4082214213,-7389661738], 16);}
  else if (station === "Inwood - 207th St") {map.zoomTo([40868072,-73919899], 16);}
  else if (station === "Jackson Ave") {map.zoomTo([4081643747,-7390770194], 16);}
  else if (station === "Jackson Hts - Roosevelt Av") {map.zoomTo([4074653969,-7389129867], 16);}
  else if (station === "Jamaica - 179th St") {map.zoomTo([4071264567,-73783817], 16);}
  else if (station === "Jamaica - Van Wyck") {map.zoomTo([4070289855,-7381701287], 16);}
  else if (station === "Jamaica Ctr - Parsons / Archer") {map.zoomTo([4070206738,-7380109632], 16);}
  else if (station === "Jay St - MetroTech") {map.zoomTo([4069247064,-7398721815], 16);}
  else if (station === "Jay St - MetroTech") {map.zoomTo([406922554,-7398605668], 16);}
  else if (station === "Jefferson St") {map.zoomTo([4070660667,-73922913], 16);}
  else if (station === "Junction Blvd") {map.zoomTo([40749145,-73869527], 16);}
  else if (station === "Junius St") {map.zoomTo([40663589,-7390244864], 16);}
  else if (station === "Kew Gardens - Union Tpke") {map.zoomTo([4071403482,-7383037027], 16);}
  else if (station === "Kings Hwy") {map.zoomTo([4060863865,-7395760874], 16);}
  else if (station === "Kings Hwy") {map.zoomTo([4060325841,-7397235531], 16);}
  else if (station === "Kings Hwy") {map.zoomTo([40604059,-73980373], 16);}
  else if (station === "Kingsbridge Rd") {map.zoomTo([4086776,-73897174], 16);}
  else if (station === "Kingsbridge Rd") {map.zoomTo([40866978,-73893509], 16);}
  else if (station === "Kingston - Throop Aves") {map.zoomTo([40679919,-73940859], 16);}
  else if (station === "Kingston Ave") {map.zoomTo([4066948145,-7394215978], 16);}
  else if (station === "Knickerbocker Ave") {map.zoomTo([4069866,-7391972], 16);}
  else if (station === "Kosciuszko St") {map.zoomTo([40693172,-73928509], 16);}
  else if (station === "Lafayette Ave") {map.zoomTo([40686113,-73973946], 16);}
  else if (station === "Lexington Ave - 53rd St") {map.zoomTo([4075746831,-7396907237], 16);}
  else if (station === "Lexington Ave - 59th St") {map.zoomTo([40762526,-73967967], 16);}
  else if (station === "Lexington Ave - 59th St") {map.zoomTo([4076270886,-7396737502], 16);}
  else if (station === "Lexington Ave - 63rd St") {map.zoomTo([4076461809,-7396608964], 16);}
  else if (station === "Liberty Ave") {map.zoomTo([40674542,-73896548], 16);}
  else if (station === "Livonia Ave") {map.zoomTo([4066405727,-7390056237], 16);}
  else if (station === "Long Island City - Court Sq") {map.zoomTo([4074630503,-739438156], 16);}
  else if (station === "Longwood Ave") {map.zoomTo([40816104,-73896435], 16);}
  else if (station === "Lorimer St") {map.zoomTo([40703844,-73947355], 16);}
  else if (station === "Lorimer St") {map.zoomTo([40714072,-73950248], 16);}
  else if (station === "Lower East Side - 2nd Ave") {map.zoomTo([4072340167,-73989938], 16);}
  else if (station === "Marble Hill - 225th St") {map.zoomTo([40874561,-73909831], 16);}
  else if (station === "Marcy Ave") {map.zoomTo([40708383,-73957832], 16);}
  else if (station === "Metropolitan Ave") {map.zoomTo([40712774,-73951424], 16);}
  else if (station === "Mets - Willets Point") {map.zoomTo([40754622,-73845625], 16);}
  else if (station === "Middle Village - Metropolitan Ave") {map.zoomTo([4071143131,-7388957723], 16);}
  else if (station === "Middletown Rd") {map.zoomTo([40843863,-73836322], 16);}
  else if (station === "Montrose Ave") {map.zoomTo([4070739106,-7393979285], 16);}
  else if (station === "Morgan Ave") {map.zoomTo([4070615167,-73933147], 16);}
  else if (station === "Morris Park") {map.zoomTo([40854364,-73860495], 16);}
  else if (station === "Morrison Av - Soundview") {map.zoomTo([40829521,-73874516], 16);}
  else if (station === "Mosholu Pkwy") {map.zoomTo([4087975,-73884655], 16);}
  else if (station === "Mt Eden Ave") {map.zoomTo([40844434,-73914685], 16);}
  else if (station === "Myrtle - Wyckoff Aves") {map.zoomTo([4069947106,-7391097572], 16);}
  else if (station === "Myrtle - Wyckoff Aves") {map.zoomTo([40699454,-73912179], 16);}
  else if (station === "Myrtle Ave") {map.zoomTo([40697195,-73935623], 16);}
  else if (station === "Myrtle-Willoughby Aves") {map.zoomTo([40694619,-73949067], 16);}
  else if (station === "Nassau Ave") {map.zoomTo([4072448,-73951183], 16);}
  else if (station === "Neck Rd") {map.zoomTo([4059532169,-7395507827], 16);}
  else if (station === "Neptune Ave") {map.zoomTo([4058073876,-7397459273], 16);}
  else if (station === "Nereid Ave (238 St)") {map.zoomTo([4089828652,-7385431531], 16);}
  else if (station === "Nevins St") {map.zoomTo([4068831058,-739804068], 16);}
  else if (station === "New Lots Ave") {map.zoomTo([4066631493,-7388411071], 16);}
  else if (station === "New Lots Ave") {map.zoomTo([4065891477,-7389927796], 16);}
  else if (station === "New Utrecht Ave") {map.zoomTo([4062484167,-73996353], 16);}
  else if (station === "Newkirk Ave") {map.zoomTo([4063999124,-7394829991], 16);}
  else if (station === "Newkirk Ave") {map.zoomTo([4063514194,-7396269487], 16);}
  else if (station === "Northern Blvd") {map.zoomTo([4075282483,-7390606508], 16);}
  else if (station === "Norwood - 205th St") {map.zoomTo([40874811,-73878855], 16);}
  else if (station === "Norwood Ave") {map.zoomTo([4068152,-73879626], 16);}
  else if (station === "Nostrand Ave") {map.zoomTo([4066993815,-7395042625], 16);}
  else if (station === "Nostrand Ave") {map.zoomTo([40680438,-73950426], 16);}
  else if (station === "Ocean Pkwy") {map.zoomTo([4057631167,-73968501], 16);}
  else if (station === "Ozone Park - Lefferts Blvd") {map.zoomTo([40685951,-73825798], 16);}
  else if (station === "Park Pl") {map.zoomTo([40713051,-74008811], 16);}
  else if (station === "Park Pl") {map.zoomTo([4067477167,-73957624], 16);}
  else if (station === "Parkchester") {map.zoomTo([40833226,-73860816], 16);}
  else if (station === "Parkside Ave") {map.zoomTo([4065507304,-7396145344], 16);}
  else if (station === "Parsons Blvd") {map.zoomTo([40707572,-73803289], 16);}
  else if (station === "Pelham Bay Park") {map.zoomTo([40852462,-73828121], 16);}
  else if (station === "Pelham Pkwy") {map.zoomTo([40858985,-73855359], 16);}
  else if (station === "Pelham Pkwy") {map.zoomTo([4085719241,-7386748068], 16);}
  else if (station === "Pennsylvania Ave") {map.zoomTo([4066471445,-7389488591], 16);}
  else if (station === "President St") {map.zoomTo([406678836,-739505892], 16);}
  else if (station === "Prince St") {map.zoomTo([4072432867,-73997702], 16);}
  else if (station === "Prospect Ave") {map.zoomTo([4081948726,-7390177779], 16);}
  else if (station === "Prospect Ave") {map.zoomTo([4066541367,-73992872], 16);}
  else if (station === "Prospect Park") {map.zoomTo([4066163346,-739620313], 16);}
  else if (station === "Queens Plz") {map.zoomTo([4074891772,-7393713824], 16);}
  else if (station === "Queensboro Plz") {map.zoomTo([4075063565,-7394016354], 16);}
  else if (station === "Ralph Ave") {map.zoomTo([40678822,-73920786], 16);}
  else if (station === "Rector St") {map.zoomTo([40707513,-74013783], 16);}
  else if (station === "Rector St") {map.zoomTo([4070774476,-7401297456], 16);}
  else if (station === "Rockaway Ave") {map.zoomTo([4066261749,-7390895834], 16);}
  else if (station === "Rockaway Ave") {map.zoomTo([4067834,-73911946], 16);}
  else if (station === "Rockaway Blvd") {map.zoomTo([40680429,-73843853], 16);}
  else if (station === "Rockaway Park - Beach 116 St") {map.zoomTo([4058095587,-7383559009], 16);}
  else if (station === "Roosevelt Island - Main St") {map.zoomTo([40759172,-73953235], 16);}
  else if (station === "Saratoga Ave") {map.zoomTo([4066152979,-7391633025], 16);}
  else if (station === "Seneca Ave") {map.zoomTo([40702919,-73907582], 16);}
  else if (station === "Sheepshead Bay") {map.zoomTo([4058654755,-7395405791], 16);}
  else if (station === "Shepherd Ave") {map.zoomTo([4067413,-7388075], 16);}
  else if (station === "Simpson St") {map.zoomTo([4082397684,-738930664], 16);}
  else if (station === "Smith - 9th Sts") {map.zoomTo([4067364106,-7399589173], 16);}
  else if (station === "South Ferry") {map.zoomTo([4070173051,-7401316896], 16);}
  else if (station === "Spring St") {map.zoomTo([40722301,-73997141], 16);}
  else if (station === "Spring St") {map.zoomTo([40726227,-74003739], 16);}
  else if (station === "St Lawrence Ave") {map.zoomTo([40831509,-73867618], 16);}
  else if (station === "Steinway St") {map.zoomTo([4075698736,-7392052647], 16);}
  else if (station === "Sterling St") {map.zoomTo([4066277299,-7395072891], 16);}
  else if (station === "Sutphin Blvd") {map.zoomTo([40705418,-73810833], 16);}
  else if (station === "Sutphin Blvd - Archer Av") {map.zoomTo([4070038242,-7380800472], 16);}
  else if (station === "Sutter Ave") {map.zoomTo([40669145,-73901916], 16);}
  else if (station === "Sutter Ave - Rutland Road") {map.zoomTo([4066476679,-7392252119], 16);}
  else if (station === "Times Sq - 42nd St") {map.zoomTo([4075529,-73987495], 16);}
  else if (station === "Times Sq - 42nd St") {map.zoomTo([40755477,-73987691], 16);}
  else if (station === "Times Sq - 42nd St") {map.zoomTo([40754612,-73986768], 16);}
  else if (station === "Times Sq - 42nd St") {map.zoomTo([40755983,-73986229], 16);}
  else if (station === "Tremont Ave") {map.zoomTo([4085041,-73905227], 16);}
  else if (station === "Union Sq - 14th St") {map.zoomTo([40734673,-73989951], 16);}
  else if (station === "Union Sq - 14th St") {map.zoomTo([4073476331,-7399066977], 16);}
  else if (station === "Union Sq - 14th St") {map.zoomTo([4073587227,-7399053886], 16);}
  else if (station === "Union St") {map.zoomTo([4067731567,-7398311], 16);}
  else if (station === "Utica Ave") {map.zoomTo([40679364,-73930729], 16);}
  else if (station === "Van Cortlandt Park - 242nd St") {map.zoomTo([40889248,-73898583], 16);}
  else if (station === "Van Siclen Ave") {map.zoomTo([4066551796,-7388940492], 16);}
  else if (station === "Van Siclen Ave") {map.zoomTo([4067271,-73890358], 16);}
  else if (station === "Van Siclen Ave") {map.zoomTo([4067802821,-7389165773], 16);}
  else if (station === "Vernon Blvd - Jackson Ave") {map.zoomTo([40742626,-73953581], 16);}
  else if (station === "W 4th St - Washington Sq (Lower)") {map.zoomTo([4073225449,-7400030815], 16);}
  else if (station === "W 4th St - Washington Sq (Upper)") {map.zoomTo([40732338,-74000495], 16);}
  else if (station === "W 8th St - NY Aquarium") {map.zoomTo([4057603382,-7397595787], 16);}
  else if (station === "Wakefield - 241st St") {map.zoomTo([40903125,-7385062], 16);}
  else if (station === "Wall St") {map.zoomTo([40706821,-740091], 16);}
  else if (station === "Wall St") {map.zoomTo([40707557,-74011862], 16);}
  else if (station === "West Farms Sq - E Tremont Av") {map.zoomTo([4084020763,-7387996128], 16);}
  else if (station === "Westchester Sq - E Tremont Ave") {map.zoomTo([40839892,-73842952], 16);}
  else if (station === "Whitehall St") {map.zoomTo([4070314237,-7401300724], 16);}
  else if (station === "Whitlock Ave") {map.zoomTo([40826525,-73886283], 16);}
  else if (station === "Wilson Ave") {map.zoomTo([4068886654,-739039586], 16);}
  else if (station === "Winthrop St") {map.zoomTo([4065665931,-7395007935], 16);}
  else if (station === "Woodhaven Blvd") {map.zoomTo([40693704,-73852052], 16);}
  else if (station === "Woodhaven Blvd - Queens Mall") {map.zoomTo([4073309737,-7386943209], 16);}
  else if (station === "Woodlawn") {map.zoomTo([40886037,-73878751], 16);}
  else if (station === "Woodside - 61st St") {map.zoomTo([4074563,-73902984], 16);}
  else if (station === "World Trade Center") {map.zoomTo([4071256393,-7400974462], 16);}
  else if (station === "York St") {map.zoomTo([4069974267,-73986885], 16);}
  else if (station === "Zerega Ave") {map.zoomTo([40836488,-73847036], 16);}
}

var names = document.querySelector(' .names');
names.addEventListener('change', function () {
  zoomToStation(names.value);
});
