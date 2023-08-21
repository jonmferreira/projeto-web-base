import '@testing-library/jest-dom/extend-expect'
import {expect, test,afterEach} from "vitest";
import  matchers  from 'jest-extended';
import '@testing-library/jest-dom'
expect.extend(matchers);

afterEach(() => {
 // test.useRealTimers();
});
