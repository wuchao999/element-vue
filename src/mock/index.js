import Mock from 'mockjs'

Mock.mock('/getData', () => {
    let data = {
        code: 1,
        data: [],
        total: 50
    }
    for (let i = 0; i < 10; i++) {
        data.data.push({
            name: Mock.mock('@cname'),
            address: Mock.mock('@province()') + Mock.mock('@csentence(3)'),
            id: Mock.mock('@id'),
            date: Mock.mock('@date()')
        })
    }
    return data
})