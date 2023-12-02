import { menuItems } from '../components/contents/basicData';


/**
 * header 필요 여부 체크
 * @param {*} pathname 
 * @returns 
 */
export const getIsNeededHeader = (pathname) => {
    console.log(pathname)
    let nowPathName = pathname;
    let answer = true;

    menuItems.filter((item, index) => {
        if (item.link === nowPathName) {
            answer = item.isNeededHeader;
        }
    });

    console.log('answer')
    console.log(answer)
    return answer;
}

/**
 * footer 필요 여부 체크
 * @param {*} pathname 
 * @returns 
 */
export const getIsNeededFooter = (pathname) => {
    let nowPathName = pathname;
    let answer = true;

    menuItems.filter((item, index) => {
        if (item.link === nowPathName) {
            answer = item.isNeededFooter;
        }
    });

    return answer;
}