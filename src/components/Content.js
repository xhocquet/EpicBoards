import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import Phases from './content/Phases'
import Problem from './content/Problem'
import References from './content/References'
import Title from './content/Title'
import GoodBetterBest from './content/GoodBetterBest'

import UnselectedEpic from './states/UnselectedEpic'

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '48px 2fr 1fr',
    height: 'calc(100% - 48px)',
    left: 0,
    marginTop: '48px',
    position: 'fixed',
    right: 0,
  },
  title: {
    gridColumnEnd: 4,
    gridColumnStart: 1,
    gridRowEnd: 2,
    gridRowStart: 1,
  },
  problem: {
    gridColumnEnd: 1,
    gridColumnStart: 1,
    gridRowEnd: 3,
    gridRowStart: 2,
    overflow: 'scroll',
  },
  references: {
    gridColumnEnd: 1,
    gridColumnStart: 1,
    gridRowEnd: 4,
    gridRowStart: 3,
  },
  goodBetterBest: {
    gridColumnEnd: 2,
    gridColumnStart: 2,
    gridRowEnd: 4,
    gridRowStart: 2,
  },
  phases: {
    gridColumnEnd: 3,
    gridColumnStart: 3,
    gridRowEnd: 4,
    gridRowStart: 2,
  },
}

class Content extends React.Component {
  render() {
    const { classes, epic } = this.props

    if (!epic) {
      return <UnselectedEpic />
    }

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <Title />
        </div>
        <div className={classes.problem}>
          <Problem />
        </div>
        <div className={classes.references}>
          <References />
        </div>
        <div className={classes.goodBetterBest}>
          <GoodBetterBest />
        </div>
        <div className={classes.phases}>
          <Phases />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  epic: state.epics[state.globalUi.selectedEpic],
})

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {},
  )(Content),
)
