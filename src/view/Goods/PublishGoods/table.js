//生成树
export function createTree(list) {
  let res;
  for (let index in list) {
    let next = list[+index + 1];
    let current = list[index];
    current.map(item => {
      if (next) {
        item.children = next;
      }
      return item;
    });
    //第一步的处理
    if (index == 0) {
      res = current;
    }
    index++;
  }
  return res;
}
//生成结果
export function resList(array) {
  let len = array.length;
  let results = [];
  let indexs = {};
  function specialSort(start) {
    start++;
    if (start > len - 1) {
      return;
    }
    if (!indexs[start]) {
      indexs[start] = 0;
    }
    if (!(array[start] instanceof Array)) {
      array[start] = [array[start]];
    }
    for (
      indexs[start] = 0;
      indexs[start] < array[start].length;
      indexs[start]++
    ) {
      specialSort(start);
      if (start == len - 1) {
        let temp = { props: [] };
        for (let i = len - 1; i >= 0; i--) {
          if (!(array[start - i] instanceof Array)) {
            array[start - i] = [array[start - i]];
          }
          let item = array[start - i][indexs[start - i]];
          temp[`id_${item.pid}`] = item.value;
          temp.props.push(item);
        }
        results.push(temp);
      }
    }
  }
  specialSort(-1);
  return results;
}

//生成新的二维列表
export function createList(list, y, resList) {
  let yData = list[y];
  if (yData) {
    resList[y] = [];
    let xList = yData.props;
    for (let x in xList) {
      resList[y][x] = xList[x];
    }
    return createList(list, y + 1, resList);
  } else {
    return resList;
  }
}
//获取标题头
export function getTitle(list, source) {
  for (let i in list) {
    let item = list[i];
    let setItem = {
      prop: "id_" + item.featureVal.featureTypeId,
      label: item.featureVal.featureTypeName
    };
    if (!source[i]) {
      source[i] = setItem;
    } else {
      Object.assign(source[i], setItem);
    }
  }
  return source;
}

export function getPostData(data) {
  let list = [];
  for (let i in data) {
    let item = data[i];
    let quantity = document.getElementsByClassName(`in_${i}_1`);
    let outerId = document.getElementsByClassName(`in_${i}_2`);
    let barcodes = document.getElementsByClassName(`in_${i}_3`);
    console.log(quantity, `in_${i}_1`);
    quantity = quantity ? quantity[1].value : "";
    outerId = outerId ? outerId[1].value : "";
    barcodes = barcodes ? barcodes[1].value : "";
    list.push({ props: item.props, quantity, outerId, barcodes });
  }
  return list;
}
