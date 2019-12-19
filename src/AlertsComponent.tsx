import React, { Component } from 'react'
import { connect } from 'react-redux'
import { alertActions } from './_actions';


export class AlertsComponent extends Component<any, any> {

    componentWillReceiveProps(nextProps:any) {
        nextProps.alerts.alerts.map((alert:any) => {
            if(alert.delay > 0) {
                setTimeout(() => {
                    //@ts-ignore
                    this.props.clear(alert.id)
                }, alert.delay)
                return null
            }
            return null
        })
    }
    render() {

        const { alerts } = this.props.alerts

        return (
            <div className="alert-container">
                {alerts.map((alert:any, index:any) =>
                    <div key={index} className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                        <span dangerouslySetInnerHTML={{__html: (alert.message && alert.message.replace) ? alert.message.replace('.', '_') : alert.message.toString()}}></span>
                        <button type="button" className="close" onClick={e => this.props.clear(alert.id)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state:any) => ({
    alerts: state.alert
})
const mapDispatchToProps = {
    clear: alertActions.clear
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertsComponent)
