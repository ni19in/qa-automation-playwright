import {test, expect} from '@playwright/test';

class dropdown {
    constructor (page) {
    this.page = page;
}
async selectOption(value) {
    await this.page.selectOption('#dropdown', value);

}}