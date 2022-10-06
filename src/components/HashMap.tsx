import { Table } from 'antd';
import React from 'react';

class HashMap extends React.Component {
    map = new Map<number, number>();

    dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }
    ];

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        }
    ];

    render() {
        return (
            <div>
                <h1>HashMap</h1>
                <Table dataSource={this.dataSource} columns={this.columns} />;
            </div>
        );
    }
}

export default HashMap;
