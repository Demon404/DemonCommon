'use strict';

import React, { Component } from 'react';

let BaseUrl = 'http://124.127.200.26:17080'; //外网


class BaseComponent extends Component {
    save(key, value, callback) {
        //保存成字符串才能存储
        // this.saveSex(key, 'JSON.stringify(value)');
        AsyncStorage.setItem(key, value, function(errs) {
            if (errs) {
                // console.log('存储错误');
                // alert('保存失败！');
                // callback(1);
                // Alert.alert('',
                //  data, [{
                //      text: '确定',
                //  }]
                // )
            }
            if (!errs) {
                callback(0);
            }
        })
    };

    getValue(key, callback) {
        AsyncStorage.getItem(key)
            .then( //使用Promise机制的方法
                (result) => { //使用Promise机制,如果操作成功不会有error参数
                    if (result == null) {
                        // alert('没有指定的key');
                        callback(1);
                    } else {
                        // console.log('取值'+ result);
                        callback(JSON.parse(result));
                        // alert(result);
                    }

                }
            ).catch((error) => { //读取操作失败
                callback(1);
            });
    };
    remove(key, callback) {
        AsyncStorage.removeItem(key, function(errs) {
            if (!errs) {
                callback(0);
            } else {
                callback(1);
            }
        });
    };

    post(url, json, callback) {
        fetch(BaseUrl + url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(json)
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                if (responseData.status == 'OK') {
                    callback(responseData);
                } else if (responseData.hasOwnProperty('code')) {
                    callback(responseData);
                } else {
                    if (data == '未登录状态') {
                        Alert.alert('',
                            '您的账号已经在其他设备上登录了,请重新登录', [{
                                text: '确定',
                                onPress: () => {
                                    AsyncStorage.clear((err) => {
                                        if (!err) {
                                            Actions.reset('Login')
                                        }
                                    })
                                }
                            }]
                        )
                    } else {
                        Alert.alert('',
                            responseData.msg, [{
                                text: '确定',
                            }]
                        )
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                Alert.alert('',
                    '请检查您的网络设置', [{
                        text: '确定',
                    }]
                )
            })
    }
    getMain(url, callback) {
        // let BaseUrl = 'http://124.127.200.26:17080'; //外网
        this.getValue('key', (result) => {
            fetch(BaseUrl + url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'key': result
                    }
                })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData)
                    if (responseData.status == 'OK') {
                        callback(responseData);
                    } else if (responseData.hasOwnProperty('code')) {
                        callback(responseData);
                    } else {
                        if (responseData == '未登录状态') {
                            Alert.alert('',
                                '您的账号已经在其他设备上登录了,请重新登录', [{
                                    text: '确定',
                                    onPress: () => {
                                        AsyncStorage.clear((err) => {
                                            if (!err) {
                                                Actions.reset('Login')
                                            }
                                        })
                                    }
                                }]
                            )
                        } else {
                            Alert.alert('',
                                responseData.msg, [{
                                    text: '确定',
                                }]
                            )
                        }
                    }
                })
                .catch((error) => {
                    Alert.alert('',
                        '请检查您的网络设置', [{
                            text: '确定',
                        }]
                    )
                })

        });
    };


    fetch(url, json, callback) {
        this.getValue('key', (result) => {
            fetch(BaseUrl + url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'key': result
                    },
                    body: JSON.stringify(json)
                })
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.status == 'OK') {
                        callback(responseData);
                    } else if (responseData.hasOwnProperty('code')) {
                        callback(responseData);
                    } else {
                        if (responseData == '未登录状态') {
                            Alert.alert('',
                                '您的账号已经在其他设备上登录了,请重新登录', [{
                                    text: '确定',
                                    onPress: () => {
                                        AsyncStorage.clear((err) => {
                                            if (!err) {
                                                Actions.reset('Login')
                                            }
                                        })
                                    }
                                }]
                            )
                        } else {
                            Alert.alert('',
                                responseData.msg, [{
                                    text: '确定',
                                }]
                            )
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                    Alert.alert('',
                        '请检查您的网络设置', [{
                            text: '确定',
                        }]
                    )
                    // callback('网络错误');
                })

        });
    }

}



export default BaseComponent;