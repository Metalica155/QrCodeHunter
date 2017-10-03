import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Content, Text, Button } from 'native-base';
import * as Actions from './actions';

const Reader = props => (
  <Content>
    <Button
      onPress={props.demo}
    >
      <Text>
        { props.hit }
      </Text>
    </Button>
  </Content>
);

Reader.propTypes = {
  demo: PropTypes.func.isRequired,
  hit: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  hit: state.reader.hit,
});

const mapDispatchToProps = {
  demo: Actions.demo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
