import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshoptToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSppinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;
  
  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
  
/*     fetch('https://firestore.googleapis.com/v1/projects/crwn-db-4fdfc/databases/(default)/documents/collections')
      .then( response => response.json())
      .then(collections => console.log(collections))
 */

   collectionRef.get().then(
    snapshot => {
      // console.log('SNAPSHOT',snapshot);
       const collectionMap = convertCollectionsSnapshoptToMap(snapshot);
       // console.log(collectionMap);
       updateCollections(collectionMap)
       this.setState({loading: false});
     }) 

    //console.log(collectionRef);
/*     this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
   // console.log('SNAPSHOT',snapshot);
    const collectionMap = convertCollectionsSnapshoptToMap(snapshot);
    // console.log(collectionMap);
    updateCollections(collectionMap)
    this.setState({loading: false});
  }); */
 }

  render(){
    const { match } = this.props;
    const { loading } = this.state;

    return (<div className='shop-page'>
    <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
    <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
  </div>);
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);
