import React, { Component } from 'react';
import Forums from './forums/forums'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class SelectedForum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            errors: {}
        }

    }

    jsonEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    //TODO FIX LOOP
    componentDidUpdate() {
        const posts = this.props.postInfos.postInfos
        if (!this.jsonEqual(posts, this.state.posts)) {
            this.setState({ posts });
        }
    }




    render() {
        return (
            <div className="postSpace" >
                <Forums
                    forums={this.state.posts}
                />
            </div>)
    }
}

SelectedForum.propTypes = {
    postInfos: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    postInfos: state.postInfos,
    errors: state.errors
})

export default connect(mapStateToProps, {})(SelectedForum);
