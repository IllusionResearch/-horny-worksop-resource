import type { TypeOf } from 'io-ts'
import { record } from 'io-ts'
import { UUID } from 'io-ts-types'
import { Crawler } from '.'

export const CrawlerList = record(UUID, Crawler)

export type CrawlerList = TypeOf<typeof CrawlerList>